# 🚀 Mining Pools Dashboard

Mining Pools Dashboard is a web application that provides real-time monitoring and statistics for cryptocurrency mining pools. It includes a **Next.js frontend** with **Material-UI** and a **NestJS backend** with **MongoDB** integration for comprehensive mining pool management.

---

## 📁 Project Structure

    /mining_pools
     ├── mining_pools_api/              # Backend API (NestJS + MongoDB)
     ├── mining_pools_frontend/         # Frontend (Next.js + Material-UI)
     ├── docker-compose.yml             # Docker configuration
     ├── DOCKER_README.md               # Docker setup guide
     ├── README.md                      # This file

---

## ✨ Features

### Frontend (Next.js + Material-UI)
- 📊 **Real-time Dashboard** - Live mining pool statistics
- 📋 **Interactive Table** - Sortable pool data with status indicators
- 🔍 **Detailed Modal** - Comprehensive pool information
- 🌙 **Theme Toggle** - Light/Dark mode support
- 📱 **Responsive Design** - Works on all devices
- 🔄 **Auto-refresh** - Real-time data updates

### Backend (NestJS + MongoDB)
- 🛠️ **RESTful API** - Clean and documented endpoints
- 📚 **Swagger Documentation** - Auto-generated API docs
- 🗄️ **MongoDB Integration** - Persistent data storage
- ✅ **Data Validation** - Input sanitization and validation
- 📦 **Mock Data** - Pre-populated sample mining pools

---

## 🚀 Quick Start

### 🐳 Docker Setup (Recommended)
For the fastest setup, use Docker Compose:

```bash
# Clone and start with Docker
git clone <repository-url>
cd mining_pools
docker compose up -d
```

**📖 For complete Docker instructions, see [DOCKER_README.md](./DOCKER_README.md)**

### 🛠️ Manual Setup

#### Prerequisites
- **Node.js** (v14+) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)

#### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mining_pools
   ```

2. **Backend Setup:**
   ```bash
   cd mining_pools_api
   npm install --legacy-peer-deps
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd mining_pools_frontend
   npm install
   npm run dev
   ```

4. **Access the application:**
   - **Frontend:** http://localhost:3001
   - **Backend API:** http://localhost:3000
   - **API Documentation:** http://localhost:3000/documentation

---

## 📊 API Endpoints

### Mining Pools
- `GET /mining-pools` - Get all mining pools
- `GET /mining-pools/:id` - Get specific pool details

### Sample Response
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

---

## 🛠️ Technology Stack

### Frontend
- **Next.js** - React framework
- **Material-UI** - Component library
- **Redux Toolkit** - State management
- **TypeScript** - Type safety
- **Axios** - HTTP client

### Backend
- **NestJS** - Node.js framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Swagger** - API documentation
- **TypeScript** - Type safety

---

## 📈 Dashboard Features

### Main Table View
- **Pool Name** - Mining pool identifier
- **Hashrate** - Current hashrate in TH/s
- **Active Workers** - Number of connected miners
- **Reject Rate** - Percentage of rejected shares
- **Status** - Color-coded status indicators:
  - 🟢 **Online** - Pool is operational
  - 🟡 **Degraded** - Pool has issues
  - 🔴 **Offline** - Pool is down

### Detailed Modal
- **24h Revenue** - Bitcoin earnings
- **Uptime** - Pool availability percentage
- **Location** - Geographic location
- **Fee** - Pool commission percentage

---

## 🔧 Development

### Environment Variables
Create `.env` files in both directories:

**Backend (.env):**
```
PORT=3000
MONGO_DB_URI=mongodb://localhost:27017/mining_pools
JWT_SECRET_KEY=your-secret-key
```

**Frontend (.env.local):**
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

### Scripts
```bash
# Backend
npm start          # Start development server
npm run build      # Build for production

# Frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
```
