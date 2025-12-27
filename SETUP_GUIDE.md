# Product Manager UI - Setup & Getting Started Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure API Endpoint
Copy `.env.example` to `.env.local` and update if needed:
```bash
cp .env.example .env.local
```

The default API endpoint is: `https://localhost:7054/api`

### 3. Start Development Server
```bash
npm run dev
```

The application will open at: `http://localhost:5173`

---

## 📋 Project Overview

This is a **React TypeScript** application built with **Vite** for managing products with an enterprise-grade UI using **Tailwind CSS**.

### Key Features
- ✅ **View All Products** - Browse all products in a clean list view
- ✅ **Add New Products** - Create new products with name and price
- ✅ **Real-time Updates** - Product list updates immediately after adding
- ✅ **Validation** - Client-side form validation with error messages
- ✅ **Professional UI** - Enterprise-style design with Tailwind CSS
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Error Handling** - Graceful error handling and user feedback

---

## 🏗️ Project Structure

```
ProductUI/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx           # Header with branding
│   │   ├── AddProductForm.tsx   # Form to add products
│   │   ├── ProductList.tsx      # List container
│   │   └── ProductItem.tsx      # Individual product card
│   │
│   ├── services/            # API services
│   │   └── api.ts               # Axios client & types
│   │
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind CSS styles
│
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # Documentation
```

---

## 🛠️ Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🔌 API Integration

### Base URL
```
https://localhost:7054
```

### Endpoints Used

#### 1. Get All Products
```http
GET /api/products
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 999.99
  },
  {
    "id": 2,
    "name": "Mouse",
    "price": 29.99
  }
]
```

#### 2. Create Product
```http
POST /api/products
```
**Request Body:**
```json
{
  "name": "Keyboard",
  "price": 79.99
}
```

**Response:**
```json
{
  "id": 3,
  "name": "Keyboard",
  "price": 79.99
}
```

---

## 📦 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Fast Build Tool |
| **Tailwind CSS** | Styling |
| **Axios** | HTTP Client |
| **Lucide React** | Icons |

---

## 🎨 UI/UX Design

The application features an **enterprise-grade, clean design** with:

- **Color Scheme**: Professional blue (#2563eb) with clean whites and grays
- **Typography**: Clear hierarchy with system fonts
- **Spacing**: Consistent padding and margins (8px grid)
- **Cards**: Subtle shadows and hover effects
- **Forms**: Accessible inputs with validation feedback
- **Responsive**: Mobile-first responsive design using Tailwind CSS grid

### Design Components

1. **Header** - Gradient background with app title and icon
2. **Product Card** - Clean card layout with product info
3. **Form** - Well-organized form with validation
4. **Empty State** - Helpful message when no products exist
5. **Loading State** - Spinner for async operations

---

## 🔒 Security Notes

> ⚠️ **Development Only**: The API client disables SSL verification for local development. This **MUST** be changed before deploying to production.

To enable SSL verification in production, update `src/services/api.ts`:

```typescript
// Remove the httpsAgent configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Remove httpsAgent config for production
});
```

---

## ✅ Form Validation

The Add Product form includes validation for:
- **Product Name**: Required, non-empty
- **Price**: Required, must be a positive number

Error messages are displayed clearly to users.

---

## 🚀 Production Deployment

### Build
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Environment Variables
Create a `.env.local` file with your production API endpoint:
```
VITE_API_BASE_URL=https://your-production-api.com/api
```

---

## 🐛 Troubleshooting

### Issue: "Cannot GET /api/products"
- Ensure the backend API is running on `https://localhost:7054`
- Check that the API endpoint is correct in `src/services/api.ts`

### Issue: SSL Certificate Error
- This is expected in development with self-signed certificates
- The code already handles this with `rejectUnauthorized: false`
- For production, use proper SSL certificates

### Issue: Tailwind Styles Not Loading
- Ensure `npm install` was run completely
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Restart the dev server

### Issue: Port 5173 Already in Use
```bash
# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# For Windows PowerShell
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

---

## 📝 Code Examples

### Using the API Service

```typescript
import { getProducts, createProduct } from './services/api';

// Get all products
const products = await getProducts();

// Create a new product
const newProduct = await createProduct({
  name: 'New Product',
  price: 99.99
});
```

### Creating a Component

All components are TypeScript-based functional components:

```typescript
import React from 'react';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};
```

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/docs/intro)

---

## 💡 Tips

1. **Hot Module Reload**: Changes to components are instantly reflected in the browser
2. **TypeScript Errors**: Check VSCode problems panel for type errors
3. **API Testing**: Use tools like Postman to test endpoints independently
4. **Styling**: Use Tailwind utility classes for consistency
5. **Components**: Keep components small and focused on a single responsibility

---

## 📞 Support

For issues or questions:
1. Check this guide first
2. Review the code comments
3. Check browser console for errors
4. Verify backend API is running

---

**Happy coding! 🎉**
