from fastapi import FastAPI
from app.api import routes
from app.database import engine, Base

app = FastAPI()

# Create the database tables
Base.metadata.create_all(bind=engine)

# Include the task routes
app.include_router(routes.router)
