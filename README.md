# Product Management UI

A modern, enterprise-grade React TypeScript application for managing products with a clean and professional user interface.

## Features

- ✅ View all products
- ✅ Add new products
- ✅ Real-time API integration
- ✅ Enterprise-style, clean UI
- ✅ Responsive design
- ✅ Form validation
- ✅ Loading states and error handling

## Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP Client
- **Lucide React** - Icons

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn package manager
- Backend API running at `https://localhost:7054`

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building

Build the production version:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## API Endpoints

The application consumes the following endpoints:

### Get All Products
- **URL**: `/api/products`
- **Method**: `GET`
- **Response**: Array of products with `id`, `name`, and `price`

### Add New Product
- **URL**: `/api/products`
- **Method**: `POST`
- **Body**: JSON object with `name` and `price`
- **Response**: Created product with assigned `id`

## Environment Configuration

The API base URL is configured in `src/services/api.ts`. Update the `API_BASE_URL` constant if needed:

```typescript
const API_BASE_URL = 'https://localhost:7054/api';
```

> **Note**: SSL verification is disabled for development. This should be changed in production.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # App header with branding
│   ├── ProductList.tsx      # Product list container
│   ├── ProductItem.tsx      # Individual product card
│   └── AddProductForm.tsx   # Add product form
├── services/
│   └── api.ts               # API client and types
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Tailwind CSS imports
```

## Component Overview

### Header
Displays the application title and branding with a professional gradient background.

### ProductList
Container component that displays all products. Handles loading and empty states.

### ProductItem
Individual product card showing name and price with a clean, professional design.

### AddProductForm
Form for adding new products with validation for name and price fields.

## Styling

The application uses Tailwind CSS for styling. All components follow a consistent, enterprise-style design language with:

- Blue color scheme (#2563eb primary)
- Clean white cards with subtle shadows
- Proper spacing and typography
- Responsive grid layout
- Smooth transitions and hover effects

## Error Handling

The application includes error handling for:
- Failed API requests
- Validation errors in forms
- Empty product lists
- Loading states

## Notes

- The application assumes the backend API is running on `https://localhost:7054`
- SSL verification is disabled in development for local testing
- Forms include client-side validation before submission
- Product list updates automatically after adding a new product
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
