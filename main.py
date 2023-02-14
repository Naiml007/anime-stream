from fastapi import FastAPI
from routers import anime_routes

app = FastAPI(
    title="Anime Streaming - Routers",
)

app.include_router(anime_routes.router)
