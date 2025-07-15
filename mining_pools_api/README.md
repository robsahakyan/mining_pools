# 🚀 Mining Pools API - Backend

A robust **NestJS** backend API for managing and monitoring cryptocurrency mining pools. This API provides comprehensive endpoints for mining pool statistics, detailed information, and real-time data management with **MongoDB** integration.

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Development](#-development)
- [Production](#-production)

---

## ✨ Features

- 🛠️ **RESTful API** - Clean and documented endpoints
- 📚 **Swagger Documentation** - Auto-generated API docs at `/documentation`
- 🗄️ **MongoDB Integration** - Mongoose ODM for data persistence
- ✅ **Data Validation** - Input sanitization with class-validator
- 📦 **Mock Data** - Pre-populated sample mining pools
- 🔐 **JWT Authentication** - Secure API endpoints
- 🧪 **Error Handling** - Comprehensive error responses
- 📊 **Real-time Data** - Live mining pool statistics

---

## 🛠️ Technology Stack

- **NestJS** - Progressive Node.js framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **TypeScript** - Type-safe JavaScript
- **Swagger** - API documentation
- **JWT** - JSON Web Tokens for auth
- **class-validator** - Validation decorators
- **class-transformer** - Object transformation

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14+) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mining_pools/mining_pools_api
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables:**
   ```bash
   cp test.env .env
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Access the API:**
   - **API Base URL:** http://localhost:3000
   - **Swagger Documentation:** http://localhost:3000/documentation

---

## ⚙️ Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
DOMAIN=localhost
FRONTEND_URL=http://localhost:3001

# Database Configuration
MONGO_DB_URI=mongodb://localhost:27017/mining_pools

# JWT Configuration
JWT_SECRET_KEY=your-super-secret-jwt-key
JWT_AUTH_EXPIRATION_TIME=3600
JWT_REFRESH_EXPIRATION_TIME=86400

# Mail Configuration (Optional)
MAIL_SERVICE=gmail
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_FROM=Mining Pools API <noreply@miningpools.com>
```

---

## 📊 API Endpoints

### Mining Pools

#### Get All Mining Pools
```http
GET /mining-pools
```

**Response:**
```json
[
  {
    "id": "pool-1",
    "name": "US East Pool",
    "hashrateTHs": 830.5,
    "activeWorkers": 1240,
    "rejectRate": 0.012,
    "status": "online"
  }
]
```

#### Get Mining Pool Details
```http
GET /mining-pools/:id
```

**Response:**
```json
{
  "id": "pool-1",
  "name": "US East Pool",
  "hashrateTHs": 830.5,
  "activeWorkers": 1240,
  "rejectRate": 0.012,
  "status": "online",
  "last24hRevenueBTC": 0.035,
  "uptimePercent": 99.82,
  "location": "Ashburn, VA",
  "feePercent": 1.0
}
```

### Status Codes
- **200** - Success
- **404** - Mining pool not found
- **500** - Internal server error

---

## 🗄️ Database Schema

### MiningPool Collection
```typescript
{
  id: string;              // Unique pool identifier
  name: string;            // Pool display name
  hashrateTHs: number;     // Current hashrate in TH/s
  activeWorkers: number;   // Number of connected miners
  rejectRate: number;      // Reject rate (0-1)
  status: enum;            // 'online' | 'degraded' | 'offline'
  last24hRevenueBTC: number; // 24h revenue in BTC
  uptimePercent: number;   // Uptime percentage
  location: string;        // Geographic location
  feePercent: number;      // Pool fee percentage
  createdAt: Date;         // Created timestamp
  updatedAt: Date;         // Updated timestamp
}
```

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm start              # Start development server with hot reload
npm run build:prod     # Build for production
npm run lint           # Run ESLint

# Database
npm run migration:generate  # Generate migration
npm run migration:run      # Run migrations
npm run migration:revert   # Revert last migration
```

### Project Structure
```
src/
├── modules/
│   ├── mining-pools/         # Mining pools module
│   │   ├── dtoes/           # Data Transfer Objects
│   │   ├── mining-pool.schema.ts
│   │   ├── mining-pools.controller.ts
│   │   ├── mining-pools.service.ts
│   │   └── mining-pools.module.ts
│   ├── auth/                # Authentication module
│   └── common/              # Shared utilities
├── shared/                  # Shared services
├── decorators/             # Custom decorators
├── guards/                 # Route guards
└── main.ts                 # Application entry point
```

---

## 🐳 Docker Compose Deployment

### Quick Start with Docker Compose
The easiest way to run the entire application stack (Backend + Frontend + MongoDB) is using Docker Compose:

```bash
# From the project root directory
docker compose up -d
```

This will start:
- **Backend API** - http://localhost:3000
- **Frontend Dashboard** - http://localhost:3001
- **MongoDB** - localhost:27017

### Docker Compose Commands

```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f

# View specific service logs
docker compose logs backend
docker compose logs frontend
docker compose logs mongo

# Restart specific service
docker compose restart backend

# Rebuild and restart
docker compose up -d --build

# Check service status
docker compose ps

```

### Docker Services Configuration

The `docker-compose.yml` includes:

```yaml
services:
  backend:
    build: ./mining_pools_api
    ports:
      - "3000:3000"
    environment:
      - MONGO_DB_URI=mongodb://mongo:27017/mining_pools
    depends_on:
      - mongo

  frontend:
    build: ./mining_pools_frontend
    ports:
      - "3001:3001"

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - ./data/db:/data/db
```

### Environment Variables for Docker
When using Docker Compose, the MongoDB URI is automatically configured:
- **Development**: `mongodb://mongo:27017/mining_pools`
- **Local**: `mongodb://localhost:27017/mining_pools`

---

## 🚀 Production

### Build for Production
```bash
npm run build:prod
```

### Environment Variables
Ensure all production environment variables are set:
- Database connection strings
- JWT secrets
- CORS origins
- Rate limiting settings

### Deployment Options
The API can be deployed using:
- **Docker Compose** (recommended for full stack)
- **Docker** (see `Dockerfile`)
- **PM2** for process management
- **nginx** for reverse proxy

---

## 📚 API Documentation

Complete API documentation is available at:
**http://localhost:3000/documentation**

The Swagger UI provides:
- Interactive API testing
- Request/response schemas
- Authentication examples
- Error code explanations

---

## 📝 Mock Data

The API includes pre-populated mock data with 5 mining pools:
- **US East Pool** (Online)
- **EU Central Pool** (Degraded)
- **Asia Pacific Pool** (Online)
- **Canada West Pool** (Offline)
- **Nordic Pool** (Online)

Data is automatically seeded when the application starts with an empty database.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.