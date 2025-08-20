# Docker Setup for Burger API

This project includes a Docker Compose setup for MongoDB and Mongo Express (MongoDB admin interface).

## Quick Start

1. **Copy environment variables:**
   ```bash
   cp .env.example .env
   ```

2. **Start the services:**
   ```bash
   docker-compose up -d
   ```

3. **Access the services:**
   - **MongoDB**: `mongodb://localhost:27017`
   - **Mongo Express**: http://localhost:8081

## Services

### MongoDB
- **Container**: `burger-api-mongodb`
- **Port**: 27017
- **Database**: `burger_db`
- **Admin User**: `admin` / `password123`

### Mongo Express (Web UI)
- **Container**: `burger-api-mongo-express`
- **Port**: 8081
- **Login**: `admin` / `admin123`

## Environment Variables

Configure these in your `.env` file:

```env
# MongoDB Configuration
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=password123
MONGO_DATABASE=burger_db
MONGO_PORT=27017

# MongoDB Connection String for NestJS
MONGODB_URI=mongodb://admin:password123@localhost:27017/burger_db?authSource=admin

# Mongo Express Configuration
MONGO_EXPRESS_USERNAME=admin
MONGO_EXPRESS_PASSWORD=admin123
MONGO_EXPRESS_PORT=8081
```

## Commands

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes (deletes data)
docker-compose down -v

# Restart services
docker-compose restart
```

## Data Persistence

MongoDB data is persisted in Docker volumes:
- `mongodb_data`: Database files
- `mongodb_config`: Configuration files

Data will persist between container restarts unless you use `docker-compose down -v`.
