# 🚀 Mining Pools Dashboard - Frontend

A modern **Next.js** frontend application for monitoring and managing cryptocurrency mining pools. Built with **Material-UI** and **Redux Toolkit** for a responsive, real-time dashboard experience.

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [State Management](#-state-management)
- [Styling](#-styling)
- [Development](#-development)
- [Build & Deploy](#-build--deploy)

---

## ✨ Features

### 🎯 Core Features
- 📊 **Real-time Dashboard** - Live mining pool statistics and monitoring
- 📋 **Interactive Table** - Sortable pool data with pagination
- 🔍 **Detailed Modal** - Comprehensive pool information popup
- 🔄 **Auto-refresh** - Real-time data updates with refresh button
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### 🎨 UI/UX Features
- 🌙 **Theme Toggle** - Light/Dark mode switching
- 🎨 **Material-UI Components** - Modern, accessible component library
- 🔴🟡🟢 **Status Indicators** - Color-coded pool status (Online/Degraded/Offline)
- ⚡ **Loading States** - Smooth loading animations and skeleton screens
- 🚨 **Error Handling** - User-friendly error messages and retry options

### 📊 Data Visualization
- 📈 **Mining Pool Statistics** - Hashrate, workers, reject rates
- 💰 **Revenue Tracking** - 24-hour Bitcoin earnings
- 📍 **Geographic Data** - Pool locations and server information
- 💲 **Fee Information** - Pool commission and cost details

---

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 13** - React framework with App Router
- **React 18** - Component library with hooks
- **TypeScript** - Type-safe JavaScript
- **Material-UI v5** - Component library and design system

### State Management
- **Redux Toolkit** - Modern Redux with less boilerplate
- **createAsyncThunk** - Async action creators
- **extraReducers** - Advanced state management

### Styling & UI
- **Emotion** - CSS-in-JS styling library
- **Material-UI Theme** - Customizable theme system
- **Responsive Design** - Mobile-first approach

### HTTP & API
- **Axios** - HTTP client for API calls
- **Custom Hooks** - Reusable logic abstraction
- **Error Boundaries** - Graceful error handling

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14+) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mining_pools/mining_pools_frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.test.local .env.local
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - **Frontend:** http://localhost:3001
   - **Backend Required:** http://localhost:3000 (API)

---

## ⚙️ Configuration

Create a `.env.local` file in the root directory:

```env
# Backend API Configuration
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000

# Optional: Additional configurations
NEXT_PUBLIC_APP_NAME=Mining Pools Dashboard
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Environment Variables
- `NEXT_PUBLIC_BACKEND_URL` - Backend API base URL
- `NEXT_PUBLIC_APP_NAME` - Application display name
- `NEXT_PUBLIC_APP_VERSION` - Application version

---

## �� Project Structure

```
src/
├── @core/                      # Core utilities and configurations
│   ├── components/            # Reusable core components
│   │   ├── auth/             # Authentication components
│   │   ├── spinner/          # Loading components
│   │   └── styled/           # Styled components
│   ├── context/              # React context providers
│   ├── hooks/                # Custom React hooks
│   ├── layouts/              # Layout components
│   ├── theme/                # Material-UI theme configuration
│   └── utils/                # Utility functions
├── components/               # Application-specific components
│   ├── MiningPoolsTable.tsx  # Main data table
│   └── MiningPoolDetailsModal.tsx # Details modal
├── pages/                    # Next.js pages
│   ├── mining-pools-dashboard.tsx # Main dashboard
│   ├── _app.tsx             # App configuration
│   └── _document.tsx        # Document configuration
├── redux/                    # State management
│   ├── api/                 # API layer
│   ├── mining-pools/        # Mining pools slice
│   └── store.ts             # Redux store configuration
├── types/                    # TypeScript definitions
└── layouts/                  # Layout components
```

---

## 🧩 Components

### Main Components

#### `MiningPoolsTable.tsx`
- **Purpose:** Display mining pools in a sortable table
- **Features:**
  - Status color indicators
  - Responsive design
  - Loading states
  - Error handling
  - Action buttons

#### `MiningPoolDetailsModal.tsx`
- **Purpose:** Show detailed pool information
- **Features:**
  - Modal popup interface
  - Comprehensive pool data
  - Status indicators
  - Responsive layout

#### `mining-pools-dashboard.tsx`
- **Purpose:** Main dashboard page
- **Features:**
  - Data fetching
  - State management
  - Refresh functionality
  - Error handling

---

## 🔄 State Management

### Redux Store Structure
```typescript
{
  miningPools: {
    pools: MiningPool[];           // List of all pools
    selectedPool: MiningPoolDetails | null; // Selected pool details
    loading: boolean;              // Loading state
    error: string | null;          // Error messages
  }
}
```

### Async Actions
- `fetchMiningPoolsThunk` - Fetch all mining pools
- `fetchMiningPoolDetailsThunk` - Fetch specific pool details

### Selectors
- `selectMiningPools` - Get all pools
- `selectSelectedPool` - Get selected pool details
- `selectMiningPoolsLoading` - Get loading state
- `selectMiningPoolsError` - Get error state

---

## 🎨 Styling

### Theme Configuration
- **Light/Dark Mode** - Toggle between themes
- **Material-UI Theme** - Customizable color palette
- **Responsive Breakpoints** - Mobile-first design
- **Typography** - Consistent text styling

### Status Colors
- 🟢 **Online** - `success` color (green)
- 🟡 **Degraded** - `warning` color (yellow)
- 🔴 **Offline** - `error` color (red)

### Component Styling
```typescript
// Example styled component
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));
```

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Run ESLint
npm run type-check     # Run TypeScript checks

# Testing
npm run test           # Run tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting
- **Hot Reload** - Instant updates during development

### Code Quality
- **TypeScript** - Static type checking
- **ESLint Rules** - Code style enforcement
- **Component Architecture** - Modular component design
- **Custom Hooks** - Reusable logic patterns

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Production Optimization
- **Code Splitting** - Automatic chunk splitting
- **Image Optimization** - Next.js image optimization
- **Bundle Analysis** - Bundle size optimization
- **SEO Optimization** - Meta tags and structured data

### Deployment Options
- **Vercel** - Recommended for Next.js apps
- **Netlify** - Static site hosting
- **Docker** - Containerized deployment
- **Self-hosted** - Custom server deployment

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Features Overview

### Dashboard Features
| Feature | Description | Status |
|---------|-------------|---------|
| Pool List | Display all mining pools | ✅ |
| Pool Details | Show detailed information | ✅ |
| Status Indicators | Color-coded pool status | ✅ |
| Theme Toggle | Light/Dark mode | ✅ |
| Responsive Design | Mobile-friendly | ✅ |
| Real-time Updates | Live data refresh | ✅ |
| Error Handling | User-friendly errors | ✅ |

### Data Display
- **Pool Name** - Mining pool identifier
- **Hashrate** - Current hashrate in TH/s
- **Active Workers** - Number of connected miners
- **Reject Rate** - Percentage of rejected shares
- **24h Revenue** - Bitcoin earnings
- **Uptime** - Pool availability percentage
- **Location** - Geographic location
- **Fee** - Pool commission percentage

---

## 🧪 Testing

### Test Structure
```bash
# Run all tests
npm run test

# Watch mode for development
npm run test:watch

# Coverage report
npm run test:coverage
```

### Testing Libraries
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **MSW** - API mocking
- **Testing Utils** - Custom test utilities

---

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Implement** changes with tests
4. **Run** linting and tests
5. **Submit** a Pull Request

### Code Standards
- Follow TypeScript best practices
- Write comprehensive tests
- Use consistent naming conventions
- Document complex logic

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Related Links

- [Backend API Documentation](../mining_pools_api/README.md)
- [Material-UI Documentation](https://mui.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
  


