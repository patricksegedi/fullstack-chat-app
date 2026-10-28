# PostgreSQL & SQLAlchemy – Technical Notes

## 1. PostgreSQL Fundamentals

**PostgreSQL** is an open-source relational database management system (RDBMS) that stores data in tables consisting of rows and columns.

- **Database:** A collection of related data and database objects.
- **Table:** Stores records as rows with defined columns.
- **Role:** A PostgreSQL identity that can own database objects and receive permissions.
- **User:** A role with the `LOGIN` privilege.
- **Privileges:** Control what a role can access or modify.

In our project, `chat_app_db` is owned by the dedicated role `chat_app_user`.

### Authentication

PostgreSQL authentication is configured through `pg_hba.conf`.

- `trust` – Allows matching connections without password verification.
- `scram-sha-256` – Authenticates using a password with SCRAM.

Our local development environment currently uses `trust`. Production environments require appropriate authentication and access controls.

## 2. Database Connectivity

Our FastAPI backend communicates with PostgreSQL using SQLAlchemy and psycopg.

- **psycopg:** PostgreSQL database driver for Python.
- **SQLAlchemy:** Database toolkit and ORM that uses the driver to communicate with PostgreSQL.
- **Connection string:** Specifies the database driver, credentials, host, port and database.
- **Environment variables:** Store configuration outside application source code.
- **python-dotenv:** Loads environment variables from a `.env` file.

Our local connection string:

```dotenv
DATABASE_URL=postgresql+psycopg://chat_app_user@localhost:5432/chat_app_db
```

The `.env` file is excluded from Git to prevent committing local configuration and potential credentials.

## 3. SQLAlchemy Fundamentals

**ORM (Object-Relational Mapping)** maps Python classes to relational database tables, allowing application code to work with Python objects.

### Engine

The SQLAlchemy Engine manages database connectivity and connection pooling.

```python
engine = create_engine(DATABASE_URL)
```

Creating an Engine does not immediately establish a database connection.

### Session

A Session manages database operations and transactions.

```python
SessionLocal = sessionmaker(bind=engine)
```

`SessionLocal` is a session factory. Calling `SessionLocal()` creates an individual Session that must be closed after use.

### Connection Test

We verified our PostgreSQL connection using:

```python
from sqlalchemy import text
from app.db.session import engine

with engine.connect() as connection:
    result = connection.execute(text("SELECT 1"))
    print(result.scalar())
```

Output: `1`

This confirms that SQLAlchemy can connect to PostgreSQL and execute a SQL statement.

## 4. Python Environment & Dependencies

**Virtual environment (`.venv`):** Isolates a project's Python packages from other projects.

**pip:** Python's package installer.

**requirements.txt:** Records installed dependencies and their versions so the environment can be reproduced.

### Essential Commands

```bash
# Activate the virtual environment (macOS/Linux)
source .venv/bin/activate

# Install dependencies
python -m pip install sqlalchemy "psycopg[binary]"

# Save installed dependencies
python -m pip freeze > requirements.txt

# Reinstall project dependencies
python -m pip install -r requirements.txt
```

Run these commands from `backend/` with the correct virtual environment activated.

## 5. PostgreSQL Commands

```bash
# Check whether PostgreSQL is accepting connections
pg_isready

# Open the PostgreSQL command-line client
psql -d postgres

# List databases (inside psql)
\l

# List roles (inside psql)
\du

# Connect to the application database
\c chat_app_db chat_app_user localhost

# Display the current connection
\conninfo

# Exit psql
\q
```

## 6. Project Architecture

Our current database integration consists of:

- `backend/.env` – Database connection configuration.
- `backend/app/db/session.py` – SQLAlchemy Engine and Session factory.
- `backend/requirements.txt` – Python dependencies.
- PostgreSQL – Persistent relational data storage.

**Current milestone:** PostgreSQL installation and SQLAlchemy connectivity completed.

**Next milestone:** SQLAlchemy ORM models, Alembic migrations, database tables, CRUD operations and FastAPI endpoints.