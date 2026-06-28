# Frontend Documentation

## Animations
The frontend leverages **Framer Motion** and **Lenis** to create a highly dynamic and smooth user experience.
- **Page & Component Transitions:** Framer Motion is used for micro-animations (like hover effects, presence animations, and scaling). Components use `motion.div` and `AnimatePresence` to seamlessly enter and exit the DOM.
- **Smooth Scrolling:** The application wraps the main layout in a `SmoothScroll` component which uses **Lenis**. This overrides the browser's default choppy scroll with a smooth, eased scroll experience.

## Custom Map
The interactive showroom map is built using **MapLibre GL JS** wrapped in React components (`CustomMap.tsx`).
- **Initialization:** The map centers on the hardcoded shop coordinates.
- **User Location:** A custom hook `useGeolocation` requests the user's browser location.
- **Routing:** If the user allows location access, `useRoute` fetches directions via the OSRM routing service. A `RouteLayer` draws the path, and an `EtaCard` displays the estimated travel time.
- **Markers:** React components (`ShopMarker`, `UserMarker`) render custom UI elements over the map canvas.

## Custom Cursor
The custom cursor (`CustomCursor.tsx`) replaces the default OS cursor with a highly interactive, context-aware dot and ring.
- **Spring Physics:** Framer Motion's `useSpring` and raw requestAnimationFrame loops apply realistic physical constraints (mass, stiffness, damping) to the cursor, giving it a heavy, premium feel.
- **Context Detection:** As the user moves the mouse, the cursor inspects the DOM elements below it. It looks for attributes like `data-cursor`, `[data-draggable]`, or HTML tags like `<video>` and `<button>`.
- **Morphing:** Based on the detected context, the cursor dynamically morphs its shape, color, size, and label (e.g., changing into a "Drag" icon, a "View Product" button, or a "Navigate" compass over the map).

## Header, Footer, and Pages
- **Layout Shell:** Next.js 16's App Router allows defining a global `layout.tsx`. The `Navbar` (header) and `Footer` are instantiated here, meaning they persist across route changes without re-rendering.
- **Pages:** Each directory inside `app/` (e.g., `about/`, `contact/`, `product/[id]`) represents a route. They are server-rendered by default (React Server Components), improving initial load times and SEO.

## How Pages Render Without HTML
Unlike traditional websites where you write `.html` files, this project uses **React** and **JSX (TypeScript XML)**. 
- **JSX/TSX:** Instead of raw HTML, developers write UI components using TSX (`.tsx` files). This syntax allows embedding JavaScript logic directly inside markup.
- **Compilation:** Before running in the browser, tools (like Webpack/Turbopack under Next.js) compile this TSX code into highly optimized, pure JavaScript.
- **Dynamic DOM:** When the JavaScript executes in the browser, React dynamically constructs the Document Object Model (DOM) and mounts elements on the screen.
- **Server-Side Rendering (SSR):** Because we use **Next.js**, the server actually executes the React code first, generates a static HTML string, and sends it to the browser for instant loading. Once the browser downloads the JavaScript bundle, React "hydrates" this static HTML, making it interactive without needing traditional HTML files in the codebase.

## Why TypeScript?
TypeScript was chosen to ensure **Type Safety** and prevent runtime errors. It allows defining exact data structures for API responses (like `ContactMessage`), props for UI components, and strict states for the cursor (e.g., `CursorState` type). It drastically improves developer experience through better autocomplete and self-documenting code.

## Backend Connection
The frontend communicates with the backend via the `contactApi.ts` service. It uses standard HTTP `fetch()` to send `POST` requests (e.g., submitting the contact form) to the Spring Boot REST API running on port `:8080`. CORS is configured on the backend to allow requests from the Next.js origin (`:3000`).
