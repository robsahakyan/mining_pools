# 🐳 Docker Setup for Mining Pools Application

Complete guide for running the **Mining Pools Dashboard** application using Docker and Docker Compose.

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Docker Services](#-docker-services)
- [Common Commands](#-common-commands)
- [Development Workflow](#-development-workflow)
- [Environment Configuration](#-environment-configuration)
- [Troubleshooting](#-troubleshooting)
- [Production Deployment](#-production-deployment)

---

## 🔧 Prerequisites

Before starting, ensure you have the following installed:

- **Docker Desktop** (v20.10+) - [Download here](https://www.docker.com/products/docker-desktop/)
- **Docker Compose** (v2.0+) - Included with Docker Desktop

### Verify Installation
```bash
docker --version
docker compose version
```

---

## 🚀 Quick Start

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd mining_pools
```

### 2. Start the Application
```bash
docker compose up -d
```

### 3. Access the Application
- **Frontend Dashboard**: http://localhost:3001
- **Backend API**: http://localhost:3000
- **API Documentation**: http://localhost:3000/documentation
- **MongoDB**: localhost:27017

### 4. Stop the Application
```bash
docker compose down
```

---

## 🏗️ Docker Services

The application consists of three main services:

### 🔧 Backend Service (`mining_pools_backend`)
- **Technology**: NestJS + TypeScript
- **Port**: 3000
- **Image**: Built from `./mining_pools_api/Dockerfile`
- **Dependencies**: MongoDB
- **Environment**: 
  - `MONGO_DB_URI=mongodb://mongo:27017/mining_pools`

### 🎨 Frontend Service (`mining_pools_frontend`)
- **Technology**: Next.js + React + Material-UI
- **Port**: 3001
- **Image**: Built from `./mining_pools_frontend/Dockerfile`
- **Features**: Mining pools dashboard with real-time data

### 🗄️ MongoDB Service (`mining_pools_mongo`)
- **Technology**: MongoDB (latest)
- **Port**: 27017
- **Image**: Official MongoDB image
- **Storage**: Persistent volume at `./data/db`

---

## 📋 Common Commands

### Basic Operations
```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# Restart all services
docker compose restart

# View service status
docker compose ps

# View all logs
docker compose logs -f

# View specific service logs
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f mongo
```

### Development Commands
```bash
# Rebuild and start (after code changes)
docker compose up -d --build

# Rebuild specific service
docker compose build backend
docker compose build frontend

# Force rebuild without cache
docker compose build --no-cache

# Restart specific service
docker compose restart backend
```

### Container Management
```bash
# Execute commands in running containers
docker compose exec backend npm run migration:run
docker compose exec frontend npm run build
docker compose exec mongo mongosh mining_pools

# Access container shell
docker compose exec backend bash
docker compose exec frontend sh
docker compose exec mongo mongosh
```

### Data Management
```bash
# View MongoDB data
docker compose exec mongo mongosh mining_pools --eval "db.miningpools.find()"

# Backup MongoDB data
docker compose exec mongo mongodump --db mining_pools --out /data/db/backup

# Remove all containers and volumes
docker compose down -v
```

---

## 🔄 Development Workflow

### 1. Code Changes
After making changes to your code:

```bash
# Stop containers
docker compose down

# Rebuild and start
docker compose up -d --build
```

### 2. Database Changes
If you modify database schemas:

```bash
# Restart backend with fresh DB
docker compose down
docker compose up -d --build
```

### 3. Environment Changes
After updating environment variables:

```bash
# Restart affected services
docker compose restart backend
```

### 4. Debugging
```bash
# View real-time logs
docker compose logs -f backend

# Check container status
docker compose ps

# Inspect container details
docker compose inspect backend
```

---

## ⚙️ Environment Configuration

### Development Environment
The application uses the following environment variables:

```env
# Backend Configuration
PORT=3000
DOMAIN=localhost
FRONTEND_URL=http://localhost:3001
MONGO_DB_URI=mongodb://mongo:27017/mining_pools

# JWT Configuration
JWT_SECRET_KEY=your-secret-key
JWT_AUTH_EXPIRATION_TIME=3600
JWT_REFRESH_EXPIRATION_TIME=86400

# Mail Configuration (Optional)
MAIL_SERVICE=gmail
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

### Docker Compose Override
Create `docker-compose.override.yml` for local customization:

```yaml
services:
  backend:
    environment:
      - NODE_ENV=development
      - DEBUG=true
    volumes:
      - ./mining_pools_api:/app
      - /app/node_modules
  
  frontend:
    environment:
      - NODE_ENV=development
    volumes:
      - ./mining_pools_frontend:/app
      - /app/node_modules
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using the port
lsof -i :3000
lsof -i :3001
lsof -i :27017

# Stop conflicting services
docker compose down
```

#### 2. MongoDB Connection Issues
```bash
# Check MongoDB logs
docker compose logs mongo

# Verify MongoDB is running
docker compose ps mongo

# Reset MongoDB data
docker compose down -v
docker compose up -d
```

#### 3. Build Failures
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker compose build --no-cache

# Check disk space
docker system df
```

#### 4. Container Won't Start
```bash
# Check container logs
docker compose logs backend

# Inspect container
docker compose inspect backend

# Try starting in foreground
docker compose up backend
```

### Performance Issues
```bash
# View resource usage
docker stats

# Clean up unused resources
docker system prune -a --volumes

# Restart Docker Desktop
# (macOS/Windows only)
```

---

## 🚀 Production Deployment

### 1. Production Docker Compose
Create `docker-compose.prod.yml`:

```yaml
services:
  backend:
    build: 
      context: ./mining_pools_api
      dockerfile: Dockerfile.prod
    environment:
      - NODE_ENV=production
      - MONGO_DB_URI=mongodb://mongo:27017/mining_pools_prod
    restart: unless-stopped

  frontend:
    build:
      context: ./mining_pools_frontend
      dockerfile: Dockerfile.prod
    restart: unless-stopped

  mongo:
    image: mongo:latest
    restart: unless-stopped
    volumes:
      - mongodb_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=secure_password

volumes:
  mongodb_data:
```

### 2. Production Commands
```bash
# Start production environment
docker compose -f docker-compose.prod.yml up -d

# View production logs
docker compose -f docker-compose.prod.yml logs -f

# Stop production environment
docker compose -f docker-compose.prod.yml down
```

### 3. Production Checklist
- [ ] Set secure environment variables
- [ ] Configure MongoDB authentication
- [ ] Set up SSL certificates
- [ ] Configure reverse proxy (nginx)
- [ ] Set up monitoring and logging
- [ ] Configure backups
- [ ] Set resource limits

---

## 📝 Additional Resources

### Official Documentation
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [MongoDB Docker Hub](https://hub.docker.com/_/mongo)

### Application-Specific
- [Backend API Documentation](./mining_pools_api/README.md)
- [Frontend Documentation](./mining_pools_frontend/README.md)
- [Main Project README](./README.md)

---

## 🤝 Contributing

1. Make your changes
2. Test with Docker: `docker compose up -d --build`
3. Verify all services work correctly
4. Submit pull request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 