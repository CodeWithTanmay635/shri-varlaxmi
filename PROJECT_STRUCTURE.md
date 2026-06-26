# 📁 Shri Varalakshmi — Project Structure

> Full-stack monorepo: **Next.js 16** frontend + **Spring Boot 4.1** backend

---

```
shri-varlaxmi/
│
├── 📄 package.json                  # Next.js dependencies & scripts
├── 📄 next.config.ts                # Next.js configuration
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 postcss.config.mjs            # PostCSS (Tailwind v4)
├── 📄 eslint.config.mjs             # ESLint config
├── 📄 next-env.d.ts                 # Next.js type declarations
├── 📄 README.md
├── 📄 AGENTS.md                     # Agent rules
├── 📄 CLAUDE.md
│
├── 🌐 public/                       # Static assets (served at /)
│   ├── 📄 file.svg
│   ├── 📄 globe.svg
│   ├── 📄 next.svg
│   ├── 📄 vercel.svg
│   ├── 📄 window.svg
│   └── 🖼️ images/                   # Product & generated images (21 files)
│       ├── 📄 antigravity_bg.png
│       └── 📄 Gemini_Generated_Image_*.png
│
├── 🎨 src/                          # ── NEXT.JS FRONTEND ──
│   │
│   ├── 📁 app/                      # App Router (pages & layouts)
│   │   ├── 📄 layout.tsx            # Root layout (Montserrat, Navbar, Footer, Theme)
│   │   ├── 📄 globals.css           # Design system (themes, glassmorphism, utilities)
│   │   ├── 📄 page.tsx              # Homepage
│   │   ├── 📄 favicon.ico
│   │   ├── 📄 not-found.tsx         # Custom 404 page
│   │   │
│   │   ├── 📁 about/
│   │   │   └── 📄 page.tsx          # About page
│   │   │
│   │   ├── 📁 collections/
│   │   │   ├── 📄 page.tsx          # Collections listing
│   │   │   └── 📁 [id]/
│   │   │       └── 📄 page.tsx      # Individual collection (dynamic route)
│   │   │
│   │   ├── 📁 contact/
│   │   │   └── 📄 page.tsx          # Contact form → POST /api/contact (backend)
│   │   │
│   │   ├── 📁 craftsmanship/
│   │   │   └── 📄 page.tsx          # Craftsmanship showcase
│   │   │
│   │   ├── 📁 gallery/
│   │   │   └── 📄 page.tsx          # Image gallery
│   │   │
│   │   ├── 📁 privacy/
│   │   │   └── 📄 page.tsx          # Privacy policy
│   │   │
│   │   ├── 📁 product/
│   │   │   └── 📁 [id]/
│   │   │       └── 📄 page.tsx      # Product detail (dynamic route)
│   │   │
│   │   ├── 📁 terms/
│   │   │   └── 📄 page.tsx          # Terms & conditions
│   │   │
│   │   └── 📁 visit-showroom/
│   │       └── 📄 page.tsx          # Showroom visit page (with map)
│   │
│   ├── 📁 components/               # Reusable React components
│   │   ├── 📁 layout/
│   │   │   ├── 📄 Navbar.tsx        # Navigation bar
│   │   │   ├── 📄 Footer.tsx        # Site footer
│   │   │   ├── 📄 CustomCursor.tsx  # Custom cursor effect
│   │   │   ├── 📄 SmoothScroll.tsx  # Lenis smooth scroll wrapper
│   │   │   └── 📄 ThemeProvider.tsx # Dark/light theme context
│   │   │
│   │   ├── 📁 sections/
│   │   │   ├── 📄 InteractiveMapPlaceholder.tsx
│   │   │   └── 📄 ProductShowcase.tsx
│   │   │
│   │   └── 📁 map/                  # MapLibre map components
│   │       ├── 📄 CustomMap.tsx     # Base map container
│   │       ├── 📄 EtaCard.tsx       # ETA display card
│   │       ├── 📄 RouteLayer.tsx    # Route line layer
│   │       ├── 📄 ShopMarker.tsx    # Shop location marker
│   │       └── 📄 UserMarker.tsx    # User location marker
│   │
│   ├── 📁 constants/
│   │   └── 📄 showroom.ts           # Showroom constants
│   │
│   ├── 📁 hooks/
│   │   ├── 📄 useGeolocation.ts     # Browser geolocation hook
│   │   └── 📄 useRoute.ts           # Route calculation hook
│   │
│   ├── 📁 lib/
│   │   └── 📄 products.ts           # Product data definitions
│   │
│   └── 📁 services/
│       ├── 📄 contactApi.ts         # Contact form API client → Spring Boot
│       └── 📄 osrm.ts              # OSRM routing service
│
└── ☕ backend/                       # ── SPRING BOOT BACKEND ──
    │
    ├── 📄 pom.xml                    # Maven dependencies
    ├── 📄 mvnw / mvnw.cmd           # Maven wrapper
    ├── 📄 HELP.md                    # Spring Boot reference
    ├── 📁 .mvn/                      # Maven wrapper config
    │
    └── 📁 src/
        ├── 📁 main/
        │   ├── 📁 java/com/varlaxmi/contactapi/
        │   │   │
        │   │   ├── 📄 ContactApiApplication.java    # Entry point (@EnableAsync)
        │   │   │
        │   │   ├── 📁 config/                       # Configuration layer
        │   │   │   ├── 📄 SecurityConfig.java        # Spring Security + CORS
        │   │   │   ├── 📄 WebMvcConfig.java          # MVC interceptor registry
        │   │   │   └── 📄 RateLimiterInterceptor.java # Bucket4j rate limiting (5 req/min/IP)
        │   │   │
        │   │   ├── 📁 controller/                   # REST API endpoints
        │   │   │   ├── 📄 ContactController.java     # POST /api/contact (public)
        │   │   │   └── 📄 AdminController.java       # GET/PATCH /api/admin/contact (auth)
        │   │   │
        │   │   ├── 📁 model/                        # JPA entities & enums
        │   │   │   ├── 📄 ContactMessage.java        # Contact message entity
        │   │   │   └── 📄 MessageStatus.java         # NEW → READ → PENDING → REPLIED → ARCHIVED
        │   │   │
        │   │   ├── 📁 repository/                   # Data access
        │   │   │   └── 📄 ContactMessageRepository.java  # JPA repository
        │   │   │
        │   │   └── 📁 service/                      # Business logic
        │   │       ├── 📄 ContactMessageService.java  # Message CRUD + status management
        │   │       └── 📄 NotificationService.java    # Async Gmail SMTP notifications
        │   │
        │   └── 📁 resources/
        │       ├── 📄 application.properties         # DB, security, Gmail SMTP config
        │       ├── 📁 static/                        # (empty — served by Next.js)
        │       └── 📁 templates/                     # (empty — REST API only)
        │
        └── 📁 test/
            └── 📁 java/                              # Test sources
```

---

## Architecture Overview

| Layer | Technology | Port |
|-------|-----------|------|
| **Frontend** | Next.js 16 · React 19 · TypeScript · Tailwind v4 · Framer Motion · MapLibre | `:3000` |
| **Backend** | Spring Boot 4.1 · Spring Security · Spring Mail · Bucket4j · JPA/Hibernate | `:8080` |
| **Database** | H2 (dev) / PostgreSQL (prod) | — |
| **Email** | Gmail SMTP (async via `@Async`) | — |

## Key Data Flow

```
User fills contact form
        ↓
  Next.js (contact/page.tsx)
        ↓  POST /api/contact
  contactApi.ts → fetch()
        ↓
  Spring Boot (ContactController)
        ↓
  ContactMessageService.submitMessage()
        ├──→ JPA save to DB
        └──→ NotificationService.sendNotificationAsync()
                  ↓
            Gmail SMTP → shri.varlaxmi1625@gmail.com
```
