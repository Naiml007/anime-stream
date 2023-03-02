from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import anime_routes

app = FastAPI(
    title="Anime Streaming - Routers",
)

origins = [
    "CORS_HOST",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(anime_routes.router)
