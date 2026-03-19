
<!-- 🔷 1. INTRO & PROJECT -->
# ❓ Tell me about your project (Preschool ERP (MAIN PROJECT))?
# ❓ What is your role in the project?
# ❓ What challenges did you face?

<!-- 🔷 2. BACKEND & API DESIGN -->
# ❓ How do you handle server calls?
# ❓ REST vs RESTful API?
# ❓ Explain your API design?
# ❓ How do you handle errors in API?

<!-- 🔷 3. AUTHENTICATION & SECURITY -->
# ❓ How did you handle authentication?
# ❓ How do you ensure data security?
# ❓ What happens if JWT is stolen?
# ❓ Why not use only Firebase Auth


<!-- 🔷 4. ARCHITECTURE -->
# ❓ Explain multi-tenant architecture?
# ❓ How did you implement RBAC?
# ❓ How did you implement RBAC?  using express Js


<!-- 🔷 5. DATABASE (MongoDB + PostgreSQL) -->
# ❓ Difference: MongoDB vs PostgreSQL?
# ❓ How did you optimize MongoDB?
# ❓ What if database grows large?


<!-- 🔷 6. PERFORMANCE & SCALING -->
# ❓ How did you improve performance?
# ❓ How do you handle large data (3000 users)?
# ❓ How do you handle concurrent requests?


<!-- 🔷 7. PAYMENT INTEGRATION -->
# ❓ Explain payment gateway integration (Razorpay)?


<!-- 🔷 8. CLOUD & DEVOPS -->
# ❓ What GCP services did you use?
# ❓ is GCP serverless architecture?
# ❓ How do you run serverless apps locally?
# ❓ How deployment works? Add the safety aspect(CI/CD you used)


<!-- 🔷 9. FRONTEND -->
# ❓ Explain lazy loading & code splitting?


<!-- 🔷 10. BEHAVIORAL -->
# ❓ How do you handle deadlines?
# ❓ How do you work in a team?




<!-- 🔷 1. INTRO & PROJECT -->

# ❓ Tell me about your project (Preschool ERP (MAIN PROJECT))?

<!-- 🧠 Preschool ERP (MAIN PROJECT) -->
One of my main projects is a Preschool ERP system, which is a multi-tenant SaaS platform used by preschools to manage their complete operations.

It handles student admissions, attendance, fee management, staff payroll, and parent communication, all in one system. Currently, it supports around 3,000+ daily active users.

The tech stack includes React.js frontend, and Node.js with Express.JS for backend, with MongoDB as the database. We use GCP and Firebase for deployment and services.

My contribution in this Project I have worked:
- On backend, I developed REST APIs, implemented JWT authentication and role-based access control.
- I also worked on payment integration using Razorpay and GrayQuest, including webhook verification.
- On frontend, I built reusable components and improved performance using lazy loading.
- On Database we used MongoDB where i am designing Schema & queries using indexing , Aggregation ( It uses a pipeline approach, where documents pass through sequential stages—such as $match (filtering), $group (grouping), and $sort (ordering)—to transform data into aggregated insights), which improved performance.


<!-- 🌍 PreschoolsNearMe (SECOND PROJECT) -->

Another project I worked on is PreschoolsNearMe, which is a platform where parents can search for preschools nearby.

Parents can view school details and send enquiries, and schools get those enquiries or leads and dashboard to manage.

It’s built using Next.js with server-side rendering to improve SEO and Google ranking.

Also we have used the NestJS for backend which provides a structured architecture compare to Express JS.

I implemented location-based search using MongoDB geospatial queries and Google Maps API.

This improved parent-school discovery by around 40%.


# ❓ What is your role in the project?

I worked as a full-stack developer with end-to-end ownership. I was not just implementing tickets — I was involved from requirement discussions, designing the database schema, building the APIs, developing the UI, and deploying to GCP. For example, the entire payment gateway integration — from Razorpay order creation to webhook verification to PDF receipt generation — was designed and built by me.

# ❓ What challenges did you face?

One challenge was handling multi-tenant data securely. We solved it by adding schoolId in every collection and filtering all queries based on it.

One technical challenge was multi-tenant data isolation — solved using schoolId filtering across all collections and in the JWT itself.
Another was the payment webhook reliability. Razorpay sends webhooks on payment success, but we had to handle cases where the webhook arrives delayed or duplicates arrive. We solved this with idempotency — checking if the invoice was already marked 'Paid' before processing the webhook again


<!-- 🔷 2. BACKEND & API DESIGN -->

# ❓ How do you handle server calls?

# "We use async/await with a service layer, handle errors properly, and attach JWT in headers for secure API calls."

We create a separate API service file where all HTTP calls are defined using axios or fetch.

We also handle:
- Error handling using try-catch
- Loading states for better UX
- Token-based authentication by attaching JWT in headers

On the backend, APIs are designed in a modular way using NestJS controllers and services, so each request flows through validation, guards, and business logic properly.

# ❓ REST vs RESTful API?

REST is an architectural style for designing APIs using HTTP methods like GET, POST, PUT, DELETE.
RESTful API means an API that strictly follows REST principles like:
- Resource-based URLs
- Proper HTTP methods(GET, POST, PUT, DELETE)
- Stateless communication
- Standard response structure

GET /students → fetch students  
POST /students → create student  
PUT /students/:id → update  
DELETE /students/:id → delete

# ❓ Explain your API design?

I design APIs using REST principles with resource-based URLs, proper HTTP methods, and stateless communication using JWT.

I also ensure validation, proper status codes, and consistent response structure.

# ❓ How do you handle errors in API?

We use try-catch blocks and global exception filters in NestJS.

We return proper status codes and meaningful error messages.


<!-- 🔷 3. AUTHENTICATION & SECURITY -->

# ❓ How did you handle authentication?

We used JWT-based authentication. On login, NestJS generates a token containing the userId, role, and schoolId. Every request carries this token, and NestJS Guards verify it before the request reaches any controller. The schoolId inside the token is critical — every database query uses it as a filter, so one school's data is never accessible to another school, even if someone tried to guess an ID

# ❓ How do you ensure data security?

- JWT authentication
- Role-based access control
- schoolId filtering for isolation
- Input validation
- Secure webhook verification 

 # ❓ What happens if JWT is stolen?

We use short expiry tokens and secure storage (httpOnly cookies).
We also implement refresh tokens and HTTPS to prevent interception.

 # ❓ Why not use only Firebase Auth?

 Firebase handles authentication, but we need custom JWT for role-based access and tenant logic.


<!-- 🔷 4. ARCHITECTURE -->

# ❓ Explain multi-tenant architecture?

In our system, each school is treated as a separate tenant.

We used a shared database approach with schoolId in every collection.

Every API request includes schoolId from JWT, and all queries are filtered using it, ensuring strict data isolation.

This approach is scalable and avoids managing multiple databases.

# ❓ How did you implement RBAC?

We implemented RBAC using JWT and NestJS guards.

The JWT contains the user's role, and we created a custom RolesGuard that checks if the user has permission to access a particular API.

On the frontend, we also hide UI elements based on role to improve user experience.

# ❓ How did you implement RBAC?  using express Js

- We used JWT for authentication and custom middleware to check user roles before allowing access to routes.

In Express.js, we implemented RBAC using JWT and custom middleware.

After login, we generate a JWT that includes userId, role, and schoolId.

For protected routes, we created two middleware functions:

1. Authentication middleware:
   - Verifies the JWT token
   - Extracts user details (userId, role, schoolId)
   - Attaches them to the request object

2. Authorization middleware (RBAC):
   - Checks if the user’s role is allowed to access the route
   - For example, only admin can access fee management APIs

We use this middleware in routes like:
app.get('/fees', authMiddleware, roleMiddleware(['admin']), controller)

This ensures only authorized users can access specific endpoints.


<!-- 🔷 5. DATABASE (MongoDB + PostgreSQL) -->

# ❓ Difference: MongoDB vs PostgreSQL?

MongoDB is a NoSQL database storing data in JSON-like documents, flexible schema.

PostgreSQL is a relational database with structured tables, strong schema, and supports joins and ACID transactions.

MongoDB is good for flexible data, while PostgreSQL is better for structured data and complex relationships.


In PostgreSQL, I would normalize the data into tables.

For example:
- Students table
- Schools table
- Fees table
- Attendance table

Relationships:
- One school → many students
- One student → many attendance records
- One student → many fee records

We would use foreign keys to maintain relationships and ensure data integrity.

# ❓ How did you optimize MongoDB?

I used compound indexes on frequently queried fields like schoolId, classId, and date.

I also used projection to fetch only required fields and optimized aggregation pipelines.

This reduced query execution time..

 # ❓ What if database grows large?

 We can implement indexing, archiving old data, and scale using sharding or database optimization strategies.


<!-- 🔷 6. PERFORMANCE & SCALING -->

# ❓ How did you improve performance?

On the backend, I added compound indexes on the most frequent query fields — schoolId, classId, date for attendance queries — which reduced MongoDB query execution time by 35%. I also used projection to fetch only required fields instead of pulling full documents.
On the frontend, I implemented lazy loading and code splitting, which improved page load speed by 20%. I also built 15+ reusable components that reduced code duplication by 25%.

# ❓ How do you handle large data (3000 users)?

- Pagination
- Indexing
- Optimized queries
- Caching for frequently used data

# ❓ How do you handle concurrent requests?

We use atomic operations like $inc ($inc is an update operator used to increment the value of a numeric field by a specified amount. It is commonly used for managing counters, scores, and inventory levels) in MongoDB and ensure idempotency in critical flows like payments. 


<!-- 🔷 7. PAYMENT INTEGRATION -->

# ❓ Explain payment gateway integration (Razorpay)?

When a user clicks pay, backend creates an order using Razorpay API.

Frontend opens Razorpay checkout using that orderId.

After payment, Razorpay sends a webhook to backend.

We verify the webhook signature using HMAC SHA256 before updating payment status to ensure security.


<!-- 🔷 8. CLOUD & DEVOPS -->

# ❓ What GCP services did you use?

We used Firebase and GCP services like:

- Firebase Authentication for login
- Firebase Storage for file uploads
- Firebase Cloud Messaging for notifications
- Firebase Cloud Functions for background tasks
- GCP Cloud Run to deploy backend APIs

We used Firebase and GCP services like Firebase Authentication, Cloud Storage, Cloud Messaging, and Cloud Functions.

We deployed backend APIs on GCP Cloud Run, which auto-scales based on traffic, ensuring stability during peak usage like fee payment periods.

# ❓ is GCP serverless architecture?

Yes, GCP provides serverless architecture through services like Cloud Run, Cloud Functions, and Firebase.

Serverless means we don’t manage servers directly — GCP automatically handles scaling, infrastructure, and availability.

In our project, we used Cloud Run for backend APIs and Firebase services for authentication, storage, and notifications. This allowed us to focus on writing code without worrying about server management.


# ❓ How do you run serverless apps locally?

Yes, GCP provides serverless architecture through services like Cloud Run, Cloud Functions, and Firebase.

Even though the production environment is serverless, we design our application to be environment-independent, so it can run both locally and in cloud seamlessly.

# ❓ How deployment works? Add the safety aspect(CI/CD you used)

We used GitHub Actions for CI/CD. Every pull request runs automated tests using Jest, and only if tests pass, the code is merged.

On merge, a Docker image is built and deployed to GCP Cloud Run, and frontend is deployed to Firebase Hosting.

For safety, we implemented:
- Automated testing before deployment
- Environment-based configurations (dev, staging, production)
- Secure handling of secrets using environment variables
- Rollback capability using previous container versions in Cloud Run

This ensures deployments are reliable and reduces risk of breaking production.


<!-- 🔷 9. FRONTEND -->

# ❓ Explain lazy loading & code splitting?

Lazy loading means loading components only when needed.

In React, we use React.lazy and Suspense to split code into smaller chunks.

This reduces initial bundle size and improves page load speed.



<!-- 🔷 10. BEHAVIORAL -->
# ❓ How do you handle deadlines?

I break tasks into smaller parts, prioritize critical features, and ensure regular communication with team members to avoid delays.

# ❓ How do you work in a team?

I collaborate closely with frontend/backend teams, participate in code reviews, and follow Agile practices like sprint planning and daily standups.






