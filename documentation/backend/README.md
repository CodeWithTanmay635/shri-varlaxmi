# Backend Documentation

## Project Structure
The backend is structured using a standard **Spring Boot MVC layered architecture** inside `src/main/java/com/varlaxmi/contactapi/`. This separation of concerns ensures that the codebase remains maintainable, testable, and scalable:
- **`config/`**: Contains configuration classes for Spring Security (CORS) and Web MVC (Interceptors).
- **`controller/`**: Houses the REST API endpoints (`ContactController`). It is responsible only for handling HTTP requests and routing them to the appropriate services.
- **`service/`**: Contains the core business logic (`ContactMessageService`, `NotificationService`), entirely decoupled from the web layer.
- **`repository/`**: Interfaces extending `JpaRepository` for data access logic.
- **`model/`**: JPA entities (`ContactMessage`) and Enums (`MessageStatus`) mapping to database tables.

## Client-Server Communication
The client and server communicate via a stateless **REST API** using JSON over HTTP.
- The Next.js frontend sends a `POST /api/contact` request containing a JSON body of the user's message.
- Spring Boot receives this request in `ContactController`, mapping the JSON automatically to the `ContactMessage` Java object.
- The `SecurityConfig.java` defines **CORS (Cross-Origin Resource Sharing)** rules, allowing requests specifically from the frontend's domain (e.g., `http://localhost:3000`).

## Traffic Management and Rate Limiting
To prevent spam, abuse, and potential denial-of-service, traffic is managed using **Bucket4j**.
- `RateLimiterInterceptor.java` acts as middleware that intercepts every incoming HTTP request.
- It identifies requests based on the client's IP address.
- A token bucket algorithm allows a maximum of **5 requests per minute per IP**. If a user exceeds this, they receive an HTTP 429 (Too Many Requests) response.

## Spring Boot and Core Concepts Used
**Spring Boot** was chosen for this project due to its robust ecosystem, "convention over configuration" philosophy, and excellent support for building enterprise-grade REST APIs quickly. 

Key Spring concepts heavily utilized include:
- **Dependency Injection (DI) & Inversion of Control (IoC):** Using annotations like `@RequiredArgsConstructor` (Lombok) and `@Service`/`@RestController`, Spring manages the lifecycle of beans automatically.
- **Spring Web MVC:** Annotations like `@RestController`, `@RequestMapping`, `@PostMapping`, and `@RequestBody` are used to build the REST endpoints.
- **Spring Data JPA:** Used for Object-Relational Mapping (ORM). The `@Entity` and `@Repository` annotations allow interacting with the database without writing raw SQL queries.
- **Asynchronous Execution (`@Async`):** Used in `NotificationService.java`. Sending an email (via Gmail SMTP) can be slow. Marking the email method with `@Async` runs it in a separate background thread, ensuring the REST API responds to the user instantly.
- **Validation (`@Valid`):** Used in the controller to automatically validate incoming request bodies against the constraints defined in the `ContactMessage` model (e.g., `@NotBlank`, `@Email`).
