# Calgary Waste Management Website

A comprehensive web application for the City of Calgary's Waste & Recycling Services, designed to help residents access information about waste collection, recycling guidelines, and disposal services.

## Features

- **Collection Schedule Lookup**: Residents can enter their postal code to view their specific waste collection schedule
- **Waste Sorting Guide**: Interactive search tool to help residents determine how to properly dispose of various items
- **Bin Information**: Detailed information about the different waste bins (Green, Blue, and Black carts)
- **Landfill Locations**: Map and details of disposal facilities across Calgary
- **FAQ Section**: Answers to common waste management questions
- **Contact Information**: Multiple ways to get in touch with Waste & Recycling Services

## Technologies Used

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS for responsive design with dark mode support
- **Icons**: React Icons for intuitive UI elements
- **Layout**: Responsive design that works on desktop and mobile devices
- **Accessibility**: Focus on creating an accessible experience for all users

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- **`/src/pages`**: Main pages of the application (Home, About, FAQ, Contact, Locations)
- **`/src/components`**: Reusable UI components including:
  - `BinTypes.tsx`: Information about different waste bins
  - `CollectionSchedule.tsx`: Calendar view of collection days
  - `NextBinDay.tsx`: Upcoming collection dates
  - `WasteGuideSearch.tsx`: Search tool for waste disposal instructions
  - `QuickLinks.tsx`: Quick access to key information
- **`/src/styles`**: Global styles and Tailwind configuration
- **`/public`**: Static assets including images

## Deployment

This application can be deployed using Vercel for optimal performance with Next.js:

```bash
npm run build
# or
yarn build
```

## Future Enhancements

- Integration with city database for real-time collection schedules
- Push notifications for collection day reminders
- User accounts to save preferences and locations
- Multilingual support for Calgary's diverse population


