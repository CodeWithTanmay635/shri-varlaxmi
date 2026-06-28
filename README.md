<div align="center">
  <h1>✨ Shri Varalakshmi ✨</h1>
  <p><strong>A premium, high-performance web application showcasing elegant design and robust architecture.</strong></p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Spring_Boot-4.1-green?style=flat-square&logo=spring-boot" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Java-21-orange?style=flat-square&logo=java" alt="Java" />
</div>

<br />

## 📖 Overview

This repository is a full-stack monorepo built to deliver a seamless and engaging user experience. 
It combines a highly interactive **Next.js 16** frontend with a secure, scalable **Spring Boot 4.1** backend. The project emphasizes rich aesthetics, smooth micro-animations, and solid software engineering practices.

## 🚀 Key Features

- **Fluid Animations & Micro-Interactions**: Powered by Framer Motion and Lenis for butter-smooth scrolling and state-aware cursor morphing.
- **Interactive Showroom Map**: Custom-built MapLibre GL implementation with dynamic routing and user geolocation.
- **Modern App Router**: Utilizing Next.js 16 Server Components for optimal performance and SEO.
- **Robust REST API**: A layered Spring Boot backend architecture ensuring clean separation of concerns.
- **Security & Rate Limiting**: Built-in CORS handling and IP-based rate limiting using Bucket4j to prevent abuse.
- **Asynchronous Processing**: Non-blocking email notifications powered by Spring's `@Async`.

## 📚 Deep Dive Documentation

We have prepared comprehensive documentation explaining the core mechanics, architectural decisions, and technologies used in this project:

- 🎨 **[Frontend Documentation](./documentation/frontend/README.md)**
  - Animations (Framer Motion & Lenis)
  - Interactive Map (MapLibre GL)
  - Custom Cursor mechanics
  - App Router & Layouts
  - TypeScript integration

- ⚙️ **[Backend Documentation](./documentation/backend/README.md)**
  - Project Structure & Layered Architecture
  - Client-Server REST Communication
  - Rate Limiting implementation (Bucket4j)
  - Spring Boot Core Concepts (DI, JPA, Async)

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- Java (JDK 21+)

### Starting the Frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Starting the Backend
```bash
cd backend
# On Windows use mvnw.cmd, on macOS/Linux use ./mvnw
./mvnw spring-boot:run
```
The backend API runs on [http://localhost:8080](http://localhost:8080).

---

<div align="center">
  <i>Crafted with passion.</i>
</div>
