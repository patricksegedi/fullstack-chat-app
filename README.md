# Fullstack Chat Application

A fullstack real-time chat application built as a software engineering portfolio project.

The goal is to design, develop, and deploy a scalable application while gaining practical experience with frontend development, backend architecture, databases, real-time communication, DevOps, and cloud infrastructure.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite

### Backend
- Python
- FastAPI
- Uvicorn

### Database
- PostgreSQL – Relational database
- SQLAlchemy – ORM and database access
- psycopg – PostgreSQL driver

### Planned Technologies
- Redis – Caching and real-time messaging infrastructure
- WebSockets – Real-time communication
- Docker – Containerization
- GitHub Actions – CI/CD
- Automated Testing – Unit, integration, and end-to-end tests
- Terraform – Infrastructure as Code
- Kubernetes & Helm – Container orchestration and application deployment
- Microsoft Azure – Cloud deployment

## Project Structure

```text
chat-app/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       └── health.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── middleware.py
│   │   ├── db/
│   │   │   └── session.py
│   │   └── main.py
│   └── requirements.txt
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js and npm
- Python 3.13 or compatible version
- Git
- PostgreSQL

### Database Configuration

Create a PostgreSQL database and a dedicated database user.

Create a `.env` file inside `backend/` with the following configuration:

```dotenv
DATABASE_URL=postgresql+psycopg://chat_app_user@localhost:5432/chat_app_db
```

### Start the Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Backend: http://localhost:8000

API documentation: http://localhost:8000/docs

Health check: http://localhost:8000/health

### Start the Frontend

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Current Implementation

- React and TypeScript frontend initialized with Vite
- FastAPI backend with modular project structure
- Health check endpoint (`GET /health`)
- CORS configuration for local development
- Frontend-to-backend HTTP communication
- Git and GitHub version control
- PostgreSQL database connectivity using SQLAlchemy

## Development Roadmap

The application will be developed incrementally, implementing frontend and backend functionality together.

Planned features:

- User registration and login
- User authentication and profiles
- Private one-to-one conversations
- Group chats
- Real-time messaging using WebSockets
- Message history
- Editing messages
- Deleting messages
- Read receipts 
- Typing indicators
- Online and offline status
- Message notifications
- User search and conversation management

## Project Status

**In development** – Initial development environment, frontend/backend integration, and PostgreSQL database connectivity completed.