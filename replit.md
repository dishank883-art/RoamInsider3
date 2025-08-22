# Roam Insider - Travel & Digital Nomad Platform

## Overview

Roam Insider is a comprehensive travel and digital nomad platform specifically focused on Indian cities. The application serves as a superior alternative to Nomad List, providing detailed, real-time information about cities across India for digital nomads and travelers. The platform offers rich content including cost of living breakdowns, internet connectivity details, transportation information, safety data, climate insights, lifestyle information, and local attractions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React 18** with **TypeScript** for type safety and **Vite** as the build tool for fast development and optimized production builds. The application uses **Wouter** for lightweight client-side routing instead of React Router, providing a smaller bundle size and better performance.

**UI Framework**: The application leverages **shadcn/ui** components built on top of **Radix UI** primitives, providing a comprehensive design system with accessibility built-in. The styling is handled through **Tailwind CSS** with custom CSS variables for theming, creating a distinctive travel-focused aesthetic with colors like vintage gold, travel blue, and warm terracotta.

**State Management**: The application uses **TanStack React Query** (v5) for server state management, caching, and data synchronization. This provides efficient data fetching, automatic background updates, and optimistic updates for better user experience.

**Component Structure**: The UI is organized into reusable components with a clear separation between layout components (navigation, footer), page components (home, city pages), and feature-specific components (city details sections, search filters). The design follows a travel theme with custom fonts including Playfair Display for headings and Inter for body text.

### Backend Architecture
The backend is built with **Express.js** on Node.js, using ES modules for modern JavaScript syntax. The server architecture follows a RESTful API design pattern with clear route separation and error handling middleware.

**API Design**: The API endpoints are organized around city data with endpoints for searching cities, fetching city details, retrieving weather information, and accessing related data like attractions and events. The routes support query parameters for filtering (popular cities, search terms) and provide comprehensive error handling.

**Development Setup**: The application uses **tsx** for TypeScript execution in development and **esbuild** for production bundling, providing fast builds and efficient server startup.

### Data Storage Solutions
The application uses **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations. The database schema is well-structured with separate tables for different aspects of city information.

**Database Schema**: The schema includes tables for cities, cost of living data, internet connectivity, transportation, climate information, safety data, lifestyle details, events, and attractions. Each table uses UUIDs for primary keys and includes appropriate foreign key relationships.

**Data Management**: Drizzle Kit is used for schema migrations and database management. The application includes a storage abstraction layer that defines interfaces for data operations, enabling easy testing and potential database switching.

### Authentication and Authorization
The current implementation includes placeholder authentication components with sign-in and join buttons in the navigation. The session management appears to be prepared for implementation with express-session and connect-pg-simple for PostgreSQL-backed session storage.

### External Service Integrations

**Weather Data**: The application includes a weather API endpoint that's designed to integrate with external weather services like OpenWeatherMap for real-time weather updates. Currently implemented with mock data for development.

**Image Services**: The application uses Unsplash for city hero images and attraction photos, with optimized image loading through URL parameters for responsive images.

**Map Services**: The application structure suggests integration with mapping services for location data, with latitude and longitude fields in the city schema.

**Development Tools**: The application integrates with Replit-specific plugins for development, including runtime error overlays and cartographer for enhanced development experience in the Replit environment.

## External Dependencies

### Core Framework Dependencies
- **React 18** with TypeScript for frontend development
- **Express.js** for backend API server
- **Vite** for build tooling and development server
- **Node.js** with ES modules support

### Database and ORM
- **PostgreSQL** as the primary database
- **Drizzle ORM** for type-safe database operations
- **@neondatabase/serverless** for Neon PostgreSQL integration
- **drizzle-kit** for schema management and migrations

### UI and Styling
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library built on Radix UI
- **Radix UI primitives** for accessible UI components
- **class-variance-authority** and **clsx** for conditional styling
- **Lucide React** for consistent iconography

### State Management and Data Fetching
- **TanStack React Query v5** for server state management
- **React Hook Form** with **@hookform/resolvers** for form handling
- **Zod** via **drizzle-zod** for schema validation

### Development and Build Tools
- **TypeScript** for type safety across the application
- **tsx** for TypeScript execution in development
- **esbuild** for production bundling
- **PostCSS** with **Autoprefixer** for CSS processing

### Routing and Navigation
- **Wouter** for lightweight client-side routing

### Utility Libraries
- **date-fns** for date manipulation and formatting
- **nanoid** for generating unique identifiers

### Session Management
- **express-session** with **connect-pg-simple** for PostgreSQL-backed sessions

## Deployment Configuration

### Static Deployment Setup
The application is fully configured for Replit's static deployment with automatic structure fixes.

**Current Setup**: 
- Vite builds frontend assets to `dist/public/`
- Deployment fix script (`fix-deployment.js`) reorganizes build output for static hosting
- All city data, hostels, and content uses static/fallback data (no server required)
- External API integrations use fallback data when API keys unavailable

**Static Deployment Process**:
1. Run `vite build` to generate frontend assets
2. Run `node fix-deployment.js` to restructure for static hosting
3. Deploy using Replit's Static deployment type
4. All functionality works without server dependency

**Ready for Static Deployment**: The platform uses comprehensive static data and doesn't require database or server APIs to function. All travel information, hostel data, and city content is embedded in the application.

**Date**: August 2025 - Fully prepared for static deployment with authentic content.

The application is designed to be scalable and maintainable, with clear separation of concerns and modern development practices. The architecture supports both current requirements and future enhancements like user authentication, real-time features, and additional integrations.