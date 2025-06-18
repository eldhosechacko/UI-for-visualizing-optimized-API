
/* ======================================================================
README.md - How to Run This Angular Project
======================================================================

This Angular project is the frontend client for the NestJS Optimization API.
It demonstrates:
1.  **Infinite Scrolling:** Consuming the paginated API as the user scrolls.
2.  **API Service:** A dedicated service for interacting with the backend.
3.  **Error Handling:** An HttpInterceptor to catch and alert the user about
    rate-limiting errors (HTTP 429).

---
### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)
- The NestJS API from the `nestjs_api_optimization_demo` artifact must be running.

---
### Step 1: Project Setup

1.  Create a new directory for your Angular project (e.g., `angular-frontend`) and navigate into it.
2.  Install the dependencies:
    ```bash
    npm install
    ```
---
### Step 2: Run the Application

1.  Make sure your NestJS API server is running (`npm run start:dev` in its directory).
2.  Start the Angular development server:
    ```bash
    ng serve
    ```
3.  Open your browser and navigate to `http://localhost:4200`.

---
### Step 3: Test the Features

#### A. Test Infinite Scrolling
- As you open the application, it will load the first batch of products.
- Scroll down the list. As you approach the bottom, a "Loading..." message will appear, and the next page of products will be fetched and appended to the list.
- Continue scrolling until you see the "You've reached the end of the list" message.

#### B. Test Rate Limiting
- The NestJS API is configured to allow 5 requests per 10 seconds.
- Scroll very quickly up and down in the product list to trigger multiple API calls in rapid succession.
- Once you exceed the limit, an alert box will pop up in the browser with the message: "Too many requests. Please slow down and try again later." This is handled by our `ErrorInterceptor`.

======================================================================
*/



