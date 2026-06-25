/**
 * Contact API service — calls the Spring Boot backend
 * to submit contact form messages via POST /api/contact.
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactApiResponse {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactApiError {
  status: number;
  message: string;
  isRateLimited: boolean;
}

/**
 * Submit a contact message to the backend.
 * Throws a structured ContactApiError on failure.
 */
export async function submitContactMessage(
  data: ContactFormData
): Promise<ContactApiResponse> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw {
      status: 0,
      message:
        "Unable to reach the server. Please check your internet connection and try again.",
      isRateLimited: false,
    } satisfies ContactApiError;
  }

  if (response.ok) {
    return response.json();
  }

  // Rate-limited by Bucket4j interceptor
  if (response.status === 429) {
    throw {
      status: 429,
      message:
        "You've sent too many messages. Please wait a minute and try again.",
      isRateLimited: true,
    } satisfies ContactApiError;
  }

  // Validation errors (Spring returns 400 for @Valid failures)
  if (response.status === 400) {
    throw {
      status: 400,
      message:
        "Please check all fields are filled in correctly and try again.",
      isRateLimited: false,
    } satisfies ContactApiError;
  }

  // Any other server error
  throw {
    status: response.status,
    message: "Something went wrong on our end. Please try again later.",
    isRateLimited: false,
  } satisfies ContactApiError;
}
