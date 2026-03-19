<!-- 1️⃣ Tell me about your current project -->

Currently I am working as a Full Stack Developer at Slate and Chalk Innovation (formerly lilTriangle) where we built a Preschool ERP platform.

This system is used by preschools to manage their daily operations such as student management, attendance tracking, fee management, trip tracking, and payroll.

The platform supports 3000+ daily active users and follows a multi-tenant architecture, meaning multiple schools use the same system but their data is isolated.

The frontend is built using React.js and Next.js, while the backend is developed using Node.js and NestJS with REST APIs.

We use MongoDB for database, and the application is deployed on GCP and Firebase.

My responsibilities include developing APIs, implementing payment gateway integrations, optimizing database queries, and building reusable frontend components.

This answer matches exactly with your resume. 




<!-- 2️⃣ What was your role in the project? -->

I worked as a Full Stack Developer, so I was involved in both frontend and backend development.

On the frontend, I developed reusable components using React and implemented lazy loading to improve performance.

On the backend, I developed REST APIs using NestJS and Node.js, implemented authentication using JWT, and handled database operations using MongoDB and Mongoose.

I also integrated payment gateways like Razorpay and GrayQuest, optimized database queries using indexing, and worked on deployment using GCP and Firebase.



<!-- 3️⃣ Explain the system architecture of your project -->

Our system follows a three-layer architecture.

1️⃣ Frontend Layer
 - Built using React.js and Next.js
 - Handles UI, state management, and API calls

2️⃣ Backend Layer
 - Developed using Node.js and NestJS
 - Handles business logic
 - Exposes REST APIs

3️⃣ Database Layer
 - MongoDB used for storing application data
 - We use Mongoose for schema modeling
 - The application is deployed on GCP and Firebase hosting, and authentication is handled using JWT tokens.






<!-- 4️⃣ Explain the Payment Gateway Integration (VERY IMPORTANT) -->
 - In our ERP system, schools collect fees from parents online.
 - To support this, we integrated Razorpay and GrayQuest payment gateways.


Step 1 — Parent initiates payment
 - Parent selects the fee and clicks pay

Step 2 — Backend creates payment order
 - Our backend calls Razorpay API to create an order

Step 3 — Payment UI opens
 - Razorpay checkout opens on frontend

Step 4 — Parent completes payment
 - User pays via card, UPI, or net banking

Step 5 — Webhook verification
 - Razorpay sends payment status to our backend via webhook

Step 6 — Update database
 - If payment is successful, we update the payment status and generate receipt


<!-- 5️⃣ What challenges did you face in the project? -->

One challenge we faced was handling large data queries for reports and dashboards.
Some queries were slow because of large datasets.

To solve this:
 - We implemented MongoDB indexing
 - Optimized query structure
 - Used pagination





<!-- 6️⃣ What is Multi-Tenant Architecture? -->
 - Multi-tenant architecture means a single application serves multiple customers.
 - In our case, multiple schools use the same platform but their data is logically separated.
 - Each school has a tenant ID, and every database query filters data based on that tenant.
 - This approach helps reduce infrastructure cost and makes the system scalable.






<!-- 7️⃣ Why did you use NestJS instead of Express? -->
 
 NestJS provides a structured architecture similar to Angular.

Advantages:
 - Built-in dependency injection
 - Modular architecture
 - Easy to maintain large applications
 - Better support for TypeScript

For large enterprise applications, NestJS makes the codebase more maintainable compared to plain Express.





<!-- 8️⃣ How did you improve performance? -->
 - I improved performance in multiple ways:
 - Implemented lazy loading and code splitting in React
 - Optimized MongoDB queries using indexes
 - Reduced API response time
 - Created reusable components to reduce bundle size





<!-- 9️⃣ Explain authentication used in your project -->

We used JWT based authentication.

Flow:

1️⃣ User logs in with email and password
2️⃣ Backend verifies credentials
3️⃣ Server generates JWT token
4️⃣ Token is sent to frontend
5️⃣ Token is included in API requests for authentication

This ensures secure access to APIs.




<!-- 🔟 Why do you want to join Crum & Forster? -->

I am interested in this role because it matches my experience with React, Next.js, Node.js, and NestJS.

I enjoy working on scalable systems and enterprise applications.

Crum & Forster has a strong global presence and focuses on building modern digital platforms, so I believe it will be a great opportunity for me to grow technically and contribute to impactful projects.






<!-- 1️⃣1️⃣ What is SSR in Next.js? -->

SSR stands for Server-Side Rendering.

In SSR, the HTML page is generated on the server for every request, and then sent to the browser.

This helps improve SEO and initial page load speed because the browser receives a fully rendered page.

Flow:
1. User sends request to page
2. Next.js server executes getServerSideProps
3. Fetches data from API or database
4. Generates HTML on the server
5. Sends the rendered HTML to the browser
6. React hydrates the page on client side

| Feature      | SSR    | CSR     |
| ------------ | ------ | ------- |
| Rendering    | Server | Browser |
| Initial Load | Faster | Slower  |
| SEO          | Good   | Poor    |
| Server Load  | High   | Low     |



<!-- 1️⃣2️⃣ MongoDB Indexing -->

Indexing in MongoDB is used to improve query performance.

Without indexes, MongoDB scans the entire collection (called collection scan).
With indexing, MongoDB can quickly find the required documents.

MongoDB indexes work similar to book indexes.

They store sorted values of specific fields, allowing faster search.


- Without index

db.users.find({ email: "test@gmail.com" })
MongoDB scans every document.

 - With index

db.users.createIndex({ email: 1 })
Now MongoDB directly finds the document.

Types of indexes:

1️⃣ Single Field Index
db.users.createIndex({ email: 1 })

2️⃣ Compound Index
db.orders.createIndex({ userId: 1, createdAt: -1 })

3️⃣ Text Index
Used for search
db.posts.createIndex({ title: "text" })

4️⃣ Unique Index
Prevents duplicates
db.users.createIndex({ email: 1 }, { unique: true })







<!-- 1️⃣3️⃣ REST API Best Practices -->

REST APIs should follow good practices to ensure scalability, security, and maintainability.

1️⃣ Use Proper HTTP Methods

| Method | Purpose          |
| ------ | ---------------- |
| GET    | Fetch data       |
| POST   | Create data      |
| PUT    | Update full data |
| PATCH  | Partial update   |
| DELETE | Delete data      |


2️⃣ Use Proper Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |


3️⃣ Use Versioning

/api/v1/users
/api/v2/users

4️⃣ Authentication & Security

Use:
 - JWT authentication
 - Input validation
 - Rate limiting
 - Password hashing (bcrypt)


5️⃣ Use Pagination

- GET /students?page=1&limit=20

