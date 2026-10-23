# 🐾 Cuttie Cats

### A Little Love, A Little Paw-sitivity! 🐱💗

**Cuttie Cats** is a cat discovery and enquiry web application designed to help visitors explore adorable cats, learn about their personalities, and enquire about adopting or bringing a feline companion home.

Built using **React, Spring Boot, and MySQL**, the project combines an engaging frontend experience with a RESTful backend and database-driven cat listings.

<p align="center">
  <a href="https://cuttie-cats.lovable.app">
    <strong>🌐 Visit Live Website</strong>
  </a>
  &nbsp; • &nbsp;
  <a href="http://localhost:5173/">
    <strong>💻 Local Development</strong>
  </a>
</p>

---

## 🌐 Live Demo

| Environment | Link |
|---|---|
| 🚀 Deployed Website | [cuttie-cats.lovable.app](https://cuttie-cats.lovable.app) |
| 💻 Local Frontend | [localhost:5173](http://localhost:5173/) |
| ⚙️ Local Backend API | `http://localhost:8085/api` |

> **Note:** The local frontend link works only when the Vite development server is running on your computer. For the deployed website to use cat listings and enquiry submission, the frontend must be configured to communicate with a publicly accessible backend API.

---

## ✨ Features

### 🐱 Cat Discovery
- Browse cat listings with images and essential details.
- Explore cat names, breeds, ages, and other available information.
- View individual cat details.
- Display availability information from the application data.

### 💌 Enquiry Management
- Submit enquiries through an interactive contact form.
- Send enquiry details to the Spring Boot REST API.
- Store submitted enquiries in MySQL.
- Display submission success or error feedback.

### 🎨 Interactive User Experience
- Responsive React-based interface.
- Dedicated page sections and navigation.
- Lucide icons and custom CSS styling.
- Support for playful animations and interactive cat cards.

### ⚙️ Backend and Database
- RESTful APIs built with Spring Boot.
- MySQL database integration.
- Data persistence using Spring Data JPA and Hibernate.
- Backend CORS configuration for frontend communication.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, JavaScript, Vite |
| Styling | CSS |
| Icons | Lucide React |
| HTTP Client | Axios |
| Backend | Java, Spring Boot |
| API Architecture | REST API |
| ORM | Spring Data JPA, Hibernate |
| Database | MySQL |
| Build Tools | npm, Maven |
| Development Tools | VS Code, Spring Tool Suite, MySQL Workbench |

---

## 🏗️ Application Architecture

```text
                 ┌─────────────────────────┐
                 │       User / Visitor    │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌─────────────────────────┐
                 │     React Frontend      │
                 │       Vite + CSS        │
                 └────────────┬────────────┘
                              │
                         HTTP / Axios
                              │
                              ▼
                 ┌─────────────────────────┐
                 │   Spring Boot Backend   │
                 │       REST APIs         │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌─────────────────────────┐
                 │   Spring Data JPA       │
                 │      Hibernate          │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌─────────────────────────┐
                 │       MySQL DB          │
                 │  Cats & Enquiries       │
                 └─────────────────────────┘
```

### How It Works

1. The user opens the React frontend.
2. The frontend requests cat data from the Spring Boot API.
3. The backend retrieves the relevant records from MySQL.
4. The frontend displays the cat listings.
5. When a visitor submits an enquiry, the backend validates and stores the submitted information in the database.
6. The frontend displays the result of the submission.

---

## 📂 Project Structure

The frontend and backend are maintained as separate applications.

```text
cuttie-cats/
│
├── cuttie-cats-frontend-updated/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── cuttie-cats-backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── cuttiecats/
│   │       │           ├── config/
│   │       │           ├── cat/
│   │       │           ├── enquiry/
│   │       │           └── CuttieCatsBackendApplication.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── README.md
```

*The exact folder and component names may vary slightly depending on the version of the project on your computer.*

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/) and npm
- [Java JDK](https://adoptium.net/) compatible with the backend configuration
- [MySQL](https://dev.mysql.com/downloads/)
- [Apache Maven](https://maven.apache.org/) or the Maven Wrapper included in the project
- An IDE such as VS Code or Spring Tool Suite

Verify your installations:

```bash
node --version
npm --version
java -version
mvn --version
```

### 2. Clone the Repository

If your project is hosted on GitHub, clone the repository:

```bash
git clone <your-github-repository-url>
cd cuttie-cats
```

Replace the placeholder with your actual repository URL.

If the frontend and backend are in separate repositories, clone each repository individually and open both projects.

### 3. Configure the MySQL Database

Start your MySQL server and execute:

```sql
CREATE DATABASE cuttie_cats_db;
```

Configure the database connection in the backend's `application.properties` file.

Example configuration:

```properties
server.port=8085

spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/cuttie_cats_db}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
```

Set the database credentials using environment variables appropriate for your operating system.

**Security reminder:** Never commit real database passwords or production secrets to GitHub.

The `ddl-auto=update` setting is suitable for local development. For production deployments, use a controlled database migration strategy.

### 4. Start the Spring Boot Backend

Open a terminal in the backend project directory:

```bash
cd cuttie-cats-backend
```

Run the application using Maven:

```bash
mvn spring-boot:run
```

If the project includes the Maven Wrapper, Windows users can run:

```powershell
.\mvnw.cmd spring-boot:run
```

macOS/Linux users can run:

```bash
./mvnw spring-boot:run
```

The backend should start at:

```text
http://localhost:8085
```

### 5. Start the React Frontend

Open another terminal in the frontend project directory:

```bash
cd cuttie-cats-frontend-updated
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL displayed in the terminal. The default Vite development URL is:

**http://localhost:5173/**

---

## 🔗 REST API Documentation

The frontend communicates with the Spring Boot backend through REST endpoints.

| HTTP Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/cats` | Retrieves available cat listings |
| `GET` | `/api/cats/{id}` | Retrieves details for a specific cat |
| `POST` | `/api/enquiries` | Submits a visitor enquiry |

### Example: Retrieve Available Cats

**Request**

```http
GET /api/cats
```

The endpoint returns cat data in JSON format for the frontend to display.

### Example: Submit an Enquiry

**Request**

```http
POST /api/enquiries
Content-Type: application/json
```

**Request Body**

```json
{
  "name": "Aditi Sharma",
  "phone": "9876543210",
  "email": "aditi@example.com",
  "area": "Jaipur",
  "message": "I would like to know more about the available cats."
}
```

**Example Success Response**

```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "id": 1
}
```

The enquiry ID is generated by the database and may differ for each submission.

---

## 🗃️ Database Overview

The application uses MySQL for persistent storage.

### Cat Data

Cat records can include fields such as:

- Cat ID
- Name
- Breed
- Age
- Gender
- Price or enquiry information
- Image URLs
- Description
- Availability status

### Enquiry Data

Enquiry records can include:

- Enquiry ID
- Visitor name
- Phone number
- Email address
- Area or location
- Message
- Creation timestamp

The exact database schema is defined by the backend entities and configuration.

---

## 🔧 Troubleshooting

### Frontend cannot connect to the backend

- Confirm that Spring Boot is running on port `8085`.
- Check the Axios base URL in `src/services/api.js`.
- Test `http://localhost:8085/api/cats` in a browser or API client.
- Inspect the browser's Network and Console tabs.

### MySQL connection failure

- Confirm that the MySQL service is running.
- Verify the database name and credentials.
- Confirm that `cuttie_cats_db` exists.
- Review the backend logs for connection errors.

### CORS error

Make sure the backend CORS configuration allows the exact origin used by the frontend, such as:

```text
http://localhost:5173
```

The deployed frontend domain must also be allowed in the production backend configuration.

### Enquiry submission fails

- Inspect the response from `POST /api/enquiries`.
- Check whether the backend reports a validation or database error.
- Verify that all required form fields are included.
- Confirm that the deployed frontend uses the public backend API URL rather than `localhost`.

### Port is already in use

Stop the other process using the port or configure a different port. If you change the backend port, update the frontend API URL as well.

---

## 🔐 Deployment Checklist

Before making the project publicly available:

- [ ] Configure the production backend API URL.
- [ ] Ensure the deployed frontend can reach the backend over HTTPS.
- [ ] Configure CORS for the deployed frontend domain.
- [ ] Store database credentials securely.
- [ ] Replace sample cat records with verified data.
- [ ] Use appropriate image URLs and permissions.
- [ ] Confirm that enquiry submission works in production.
- [ ] Add suitable validation, error handling, and monitoring.
- [ ] Test the website on desktop and mobile devices.

> A deployed frontend does not automatically deploy the Spring Boot backend or MySQL database. These services must be hosted and configured separately unless your hosting platform provides an integrated setup.

---

## 🚧 Future Enhancements

Potential improvements include:

- Animated paw-print cursor trails.
- A swipeable cat carousel with interactive cards.
- Cat search, filtering, and sorting.
- Admin dashboard for cat and enquiry management.
- Email notifications for new enquiries.
- Image uploads and dedicated image storage.
- Automated frontend and backend tests.
- Improved accessibility and performance.
- Continuous integration and deployment.

---

## 👩‍💻 Author

**Amee Panchal**

Computer Science and Engineering Student | Java & Full-Stack Development Enthusiast

This project demonstrates practical experience with React frontend development, REST API integration, Spring Boot backend development, and MySQL database persistence.

---
