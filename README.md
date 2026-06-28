# Shri Varalakshmi

This is a full-stack monorepo consisting of a **Next.js 16** frontend and a **Spring Boot 4.1** backend.

## Documentation

Comprehensive documentation has been added to explain the core mechanics, architectural decisions, and technologies used in this project:

- [Frontend Documentation](./documentation/frontend/README.md)
  - Animations (Framer Motion & Lenis)
  - Interactive Map (MapLibre GL)
  - Custom Cursor (Framer Motion)
  - App Router & Layouts
  - TypeScript Usage
  - Backend Integration

- [Backend Documentation](./documentation/backend/README.md)
  - Project Structure & Layered Architecture
  - Client-Server REST Communication
  - Rate Limiting (Bucket4j)
  - Spring Boot Core Concepts (DI, JPA, Async)

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.
The backend API runs on [http://localhost:8080](http://localhost:8080).
