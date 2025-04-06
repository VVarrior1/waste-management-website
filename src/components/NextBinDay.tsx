import { useState, useRef } from 'react';
import { FiPrinter, FiCalendar, FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';

type BinEvent = {
  date: Date;
  formattedDate: string;
  weekday: string;
  dayOfMonth: number;
  binType: 'Green Cart' | 'Blue Cart' | 'Black Cart';
  color: string;
  icon: string;
};

type Week = {
  weekStart: string;
  events: BinEvent[];
  isCollapsed?: boolean;
};

const NextBinDay = () => {
  const [postalCode, setPostalCode] = useState('');
  const [isScheduleSet, setIsScheduleSet] = useState(false);
  const [error, setError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthlySchedule, setMonthlySchedule] = useState<Week[]>([]);
  const [collapseAll, setCollapseAll] = useState(false);
  const [isScheduleVisible, setIsScheduleVisible] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

  const validatePostalCode = (code: string) => {
    // Canadian postal code regex pattern
    const postalPattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    return postalPattern.test(code);
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPostalCode(value);
    setError('');
  };

  const getFormattedDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric'
    });
  };

  const getWeekDay = (date: Date): string => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const generateSchedule = (startDate: Date) => {
    // Clone the date to avoid modifying the original
    const date = new Date(startDate);
    
    // Set to first day of month
    date.setDate(1);
    
    // Get start of first week
    const firstDay = new Date(date);
    const day = firstDay.getDay();
    if (day !== 0) { // If not Sunday, go back to previous Sunday
      firstDay.setDate(firstDay.getDate() - day);
    }
    
    // Generate six weeks (typical calendar month view)
    const weeks: Week[] = [];
    
    for (let weekIndex = 0; weekIndex < 5; weekIndex++) {
      const weekStart = new Date(firstDay);
      weekStart.setDate(weekStart.getDate() + (weekIndex * 7));
      
      const weekEvents: BinEvent[] = [];
      
      // For each day of the week
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const currentDate = new Date(weekStart);
        currentDate.setDate(currentDate.getDate() + dayIndex);
        
        // Determine bin type based on schedule pattern (this is mock data)
        // Assuming a 2-week rotation: Green, Blue, Black
        const binTypes: Array<'Green Cart' | 'Blue Cart' | 'Black Cart'> = ['Green Cart', 'Blue Cart', 'Black Cart'];
        const weekNumber = Math.floor((currentDate.getDate() + day) / 7);
        const binRotation = (weekNumber % 3);
        let binType: 'Green Cart' | 'Blue Cart' | 'Black Cart';
        
        // Different pickup days for different bin types
        const dayOfWeek = currentDate.getDay();
        
        if (dayOfWeek === 1) { // Monday - Green Cart
          binType = 'Green Cart';
        } else if (dayOfWeek === 3) { // Wednesday - Blue Cart
          binType = 'Blue Cart';  
        } else if (dayOfWeek === 5) { // Friday - Black Cart
          binType = 'Black Cart';
        } else {
          // No collection on other days
          continue;
        }
        
        const binColor = binType === 'Green Cart' 
          ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200'
          : binType === 'Blue Cart'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-200';
            
        const binIcon = binType === 'Green Cart' 
          ? '🍃'
          : binType === 'Blue Cart'
            ? '♻️'
            : '🗑️';
        
        weekEvents.push({
          date: new Date(currentDate),
          formattedDate: getFormattedDate(currentDate),
          weekday: getWeekDay(currentDate),
          dayOfMonth: currentDate.getDate(),
          binType,
          color: binColor,
          icon: binIcon
        });
      }
      
      if (weekEvents.length > 0) {
        weeks.push({
          weekStart: getFormattedDate(weekStart),
          events: weekEvents,
          isCollapsed: false
        });
      }
    }
    
    return weeks;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic postal code validation
    if (postalCode.length !== 6 && postalCode.length !== 7) {
      setError('Please enter a valid postal code');
      return;
    }
    
    // You could add more validation here if needed
    if (!validatePostalCode(postalCode)) {
      setError('Please enter a valid postal code format');
      return;
    }

    // Generate schedule for current month
    const schedule = generateSchedule(currentMonth);
    setMonthlySchedule(schedule);
    setIsScheduleSet(true);
    setIsScheduleVisible(true);
    setCollapseAll(false);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
    setMonthlySchedule(generateSchedule(prevMonth));
    setCollapseAll(false);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
    setMonthlySchedule(generateSchedule(nextMonth));
    setCollapseAll(false);
  };

  const toggleWeekCollapse = (weekIndex: number) => {
    const updatedSchedule = [...monthlySchedule];
    updatedSchedule[weekIndex].isCollapsed = !updatedSchedule[weekIndex].isCollapsed;
    setMonthlySchedule(updatedSchedule);
  };

  const toggleCollapseAll = () => {
    const newCollapseState = !collapseAll;
    setCollapseAll(newCollapseState);
    
    const updatedSchedule = monthlySchedule.map(week => ({
      ...week,
      isCollapsed: newCollapseState
    }));
    
    setMonthlySchedule(updatedSchedule);
  };

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    // Include basic styles
    printWindow.document.write(`
      <html>
        <head>
          <title>Your Waste Collection Schedule</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
            h1 { color: #333; font-size: 1.4rem; }
            .header { margin-bottom: 20px; }
            .month-title { font-size: 1.2rem; font-weight: bold; margin: 20px 0; text-align: center; }
            .week { margin-bottom: 30px; }
            .week-header { font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px; font-size: 0.9rem; }
            .events { display: flex; flex-wrap: wrap; gap: 10px; }
            .event { 
              border: 1px solid #ddd; 
              padding: 15px; 
              border-radius: 5px;
              flex: 1;
              min-width: 200px;
              font-size: 0.9rem;
            }
            .green-event { background-color: #f0fff4; }
            .blue-event { background-color: #ebf8ff; }
            .black-event { background-color: #f7fafc; }
            .date { font-size: 0.95rem; font-weight: bold; }
            .bin-type { margin-top: 5px; }
            .footer { margin-top: 30px; font-size: 0.8rem; color: #666; }
            .no-events { font-style: italic; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Your Waste Collection Schedule</h1>
            <p>For postal code: <strong>${postalCode}</strong></p>
          </div>
          
          <div class="month-title">
            ${currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          
          ${monthlySchedule.map(week => `
            <div class="week">
              <div class="week-header">Week of ${week.weekStart}</div>
              <div class="events">
                ${week.events.map(event => {
                  const binClass = event.binType === 'Green Cart' 
                    ? 'green-event' 
                    : event.binType === 'Blue Cart' 
                      ? 'blue-event' 
                      : 'black-event';
                  
                  return `
                    <div class="event ${binClass}">
                      <div class="date">${event.icon} ${event.formattedDate}</div>
                      <div class="bin-type">${event.binType}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
          
          <div class="footer">
            <p>City of Calgary Waste & Recycling Services</p>
            <p>For questions, call 311</p>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    setTimeout(() => printWindow.close(), 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden mb-8">
      <div className="p-4 sm:p-6">
        {!isScheduleSet ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white mb-4">
              Find Your Collection Schedule
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enter your postal code to see your collection schedule
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={postalCode}
                  onChange={handlePostalCodeChange}
                  placeholder="e.g., T2P2M5"
                  className={`block w-full px-3 py-2 border ${error ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  maxLength={7}
                />
                {error && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md font-medium text-white transition-all duration-200 ease-in-out
                  bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700
                  shadow-md hover:shadow-lg active:shadow-inner
                  transform hover:-translate-y-0.5 active:translate-y-0
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Check Schedule
              </button>
            </form>
          </>
        ) : !isScheduleVisible ? (
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white">
                Collection Schedule
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For postal code: {postalCode}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsScheduleSet(false)}
                className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                  bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600
                  text-gray-600 dark:text-gray-300 
                  border border-gray-200 dark:border-gray-600
                  hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500"
              >
                Change Postal Code
              </button>
              <button
                onClick={() => setIsScheduleVisible(true)}
                className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                  bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700
                  text-white shadow-md hover:shadow-lg"
              >
                View Schedule
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white">
                Your Collection Schedule
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                    bg-blue-500 text-white hover:bg-blue-600"
                  title="Print schedule"
                >
                  <FiPrinter className="w-4 h-4 mr-1" />
                  Print
                </button>
                <button
                  onClick={() => setIsScheduleSet(false)}
                  className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                    bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600
                    text-gray-600 dark:text-gray-300 
                    border border-gray-200 dark:border-gray-600
                    hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500"
                >
                  Change
                </button>
                <button
                  onClick={() => setIsScheduleVisible(false)}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ease-in-out
                    bg-red-500 text-white hover:bg-red-600"
                  title="Close schedule"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Schedule for {postalCode}
              </p>
              
              <div className="flex justify-between items-center mt-4 mb-2">
                <button
                  onClick={handlePrevMonth}
                  className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                    bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 
                    border border-gray-200 dark:border-gray-600
                    hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <FiChevronLeft className="w-4 h-4 mr-1" />
                  Prev Month
                </button>
                <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <button
                  onClick={handleNextMonth}
                  className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                    bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 
                    border border-gray-200 dark:border-gray-600
                    hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  Next Month
                  <FiChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleCollapseAll}
                  className="inline-flex items-center px-3 py-1.5 text-sm rounded-md transition-all duration-200 ease-in-out
                    bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 
                    border border-gray-200 dark:border-gray-600
                    hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {collapseAll ? (
                    <>
                      <FiChevronDown className="w-4 h-4 mr-1" />
                      Expand All
                    </>
                  ) : (
                    <>
                      <FiChevronUp className="w-4 h-4 mr-1" />
                      Collapse All
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div ref={printRef} className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
              {monthlySchedule.map((week, weekIndex) => (
                <div key={weekIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div 
                    className="bg-gray-50 dark:bg-gray-700/50 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleWeekCollapse(weekIndex)}
                  >
                    <h4 className="font-medium text-gray-700 dark:text-gray-200 text-sm">
                      Week of {week.weekStart}
                    </h4>
                    <button className="text-gray-500 dark:text-gray-400">
                      {week.isCollapsed ? <FiChevronDown className="w-4 h-4" /> : <FiChevronUp className="w-4 h-4" />}
                    </button>
                  </div>
                  {!week.isCollapsed && (
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {week.events.map((event, eventIndex) => (
                          <div 
                            key={eventIndex}
                            className={`p-3 rounded-md border border-gray-200 dark:border-gray-700 ${event.color}`}
                          >
                            <div className="flex items-center">
                              <span className="text-lg mr-2">
                                {event.icon}
                              </span>
                              <div>
                                <p className="font-medium text-inherit text-sm">
                                  {event.formattedDate}
                                </p>
                                <p className="text-inherit text-xs">
                                  {event.binType}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NextBinDay; 