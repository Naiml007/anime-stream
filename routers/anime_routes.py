from fastapi import APIRouter
import requests

router = APIRouter()


@router.get("/recent_release")
async def recent_release():
    url = "https://gogoanime.consumet.stream/recent-release"
    response = requests.get(url, params={"page": 1, "type": 1})
    data = response.json()
    return data

@router.get("/search")
async def search_anime(keyword: str):
    url = "https://gogoanime.consumet.stream/search"
    params = {"keyw": keyword}
    response = requests.get(url, params=params)
    data = response.json()
    return data

@router.get("/details/{animeId}")
async def get_anime_details(animeId:str):
    url = f'https://gogoanime.consumet.stream/anime-details/{animeId}'
    response = requests.get(url)
    data = response.json()
    return data
