1) What is Nestjs?
2) How can you install NestJS and set up a new project on your machine?
3) What is Dependency Injection in NestJS?
4) Layers in NestJS?
5) Complete Architecture Flow




## Question & Answers


Qns) What is Nestjs?

 - Nest(NestJS) is a framework for building efficient, scalable Node.js server side applications. It uses progressive JavaScript and its built with and fully suports Typescript.




Qns) How can you install NestJS and set up a new project on your machine?

- To install NestJS on your machine, you need to have Node.js and npm (Node Package Manager) installed. Once you have those, you can install the NestJS CLI (Command Line Interface) globally on your machine using the following command:

 -   $ npm i -g @nestjs/cli

- This command installs the NestJS CLI globally, which allows you to use the nest command from anywhere on your machine. With the NestJS CLI, you can create new projects using

  -   $ nest new project-name

- and after creating a project you can generate NestJS modules, services, etc.

   - $ nest generate module users

- running

 -   $ nest g resource users

will several files that work together to handle CRUD (Create, Read, Update, Delete) operations for a particular entity, in this case, "users". It will generate: A controller for handling HTTP requests (e.g., users.controller.ts)

A service for business logic (e.g., users.service.ts)

A module to encapsulate the resource (e.g., users.module.ts)

If you choose to generate a REST API, it will also generate DTO (Data Transfer Object) classes for handling input data (e.g., create-user.dto.ts, update-user.dto.ts) If you choose to generate a GraphQL API, it will also generate a resolver (e.g., users.resolver.ts)



Qns) What is Dependency Injection in NestJS?

 - Dependency Injection means we do not create objects manually using "new".
 - Instead, NestJS automatically creates and injects required dependencies.

  Example: constructor(private userService: UserService) {}


 - Instead of creating an object yourself using new,
👉 NestJS creates it and gives it to you automatically.

  Here: Without Dependency Injection (Normal JavaScript)
- Controller is directly creating UserService
- Tight coupling
- Hard to test

  Here: With Dependency Injection (NestJS way)
- You did NOT write new
- NestJS creates UserService (constructor(private userService: UserService) {})
- NestJS injects it automatically


How Does It Work Internally?

- It reads all modules
- It finds providers (services)
- It creates instances
- It stores them in a container
- When needed, it injects them

)

🔹 Why Dependency Injection is Important?

✅ Loose coupling
✅ Easy testing
✅ Reusable services
✅ Clean architecture



Qns) Layers in NestJS?

 - Main layers are:
  - Controller → Service → Repository → Database

  🔹 1. Controller Layer

  - Handles HTTP request
  - Gets data from client
  - Calls service

  Example:

    @Controller('users')
    export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    }

  - Controller does NOT write business logic


  🔹 2. Service Layer
  
  - Contains business logic
  - Processes data
  - Calls database

  Example:

    @Injectable()
    export class UserService {

    getUsers() {
        return ["Mahesh", "Ravi"];
    }

    }

- Service is injected into controller.

🔹 3. Repository Layer (Database Layer)

 - If using TypeORM or Mongoose:
 - Service calls repository to interact with DB.

 Example:
  constructor(
  @InjectRepository(User)
  private userRepository: Repository<User>,
) {}

Repository handles:
 - Save
 - Update
 - Delete
 - find



 Qns) Complete Architecture Flow

    Client
    ↓
    Middleware
    ↓
    Guard
    ↓
    Interceptor
    ↓
    Controller
    ↓
    Service
    ↓
    Repository
    ↓
    Database
    ↓
    Response back

    🔹 Step-by-Step What Happens

    1️⃣ Client sends request
    2️⃣ Middleware runs (logging etc.)
    3️⃣ Guard checks authentication
    4️⃣ Interceptor runs
    5️⃣ Controller receives request
    6️⃣ Controller calls Service
    7️⃣ Service calls Repository
    8️⃣ Repository talks to database
    9️⃣ Data returns back