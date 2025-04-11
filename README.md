# Waste Management Website

A Next.js-based website for waste management and recycling services. This project provides information about waste collection, recycling initiatives, and environmental sustainability.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or higher recommended)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/waste-management-website.git
cd waste-management-website
```

### 2. Install dependencies

Install all required packages:

```bash
npm install
# or
yarn install
```

### 3. Run the development server

Start the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Features

- Responsive design for desktop and mobile devices
- Dark/light theme toggle
- (WIP) Language switching functionality (English/French)
- Interactive waste collection schedule
- Resource information
- FAQ section
- Contact form

## Project Structure

- `/public` - Static assets
- `/src` - Application source code
  - `/components` - Reusable React components
  - `/pages` - Next.js pages and API routes
  - `/styles` - CSS and styling files
  - `/utils` - Utility functions

## Technologies Used

- [Next.js](https://nextjs.org/) (v15.2.1) - React framework
- [TypeScript](https://www.typescriptlang.org/) (v5.x) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) (v4.x) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) (v5.5.0) - Icon components
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [i18next](https://www.i18next.com/) & [next-i18next](https://github.com/i18next/next-i18next) - Internationalization

## Development Notes

- The French language option is currently under development. When selected, it will display a "Work in Progress" message.
- The website is designed to be fully responsive across different screen sizes.
- Use `npm run lint` to check for code quality issues.
- Use `npm run build` followed by `npm run start` to test a production build locally.

## Browser Support

The website is tested and optimized for:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
