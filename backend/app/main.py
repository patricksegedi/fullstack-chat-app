from fastapi import FastAPI
from app.core.middleware import setup_cors
from app.api.routes.health import router as health_router

app = FastAPI()

setup_cors(app)

app.include_router(health_router)