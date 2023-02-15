from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()
BASE_URL = "https://gogoanime.consumet.stream"

@router.get("/recent_release")
async def recent_release():
    url = f"{BASE_URL}/recent-release"
    response = requests.get(url, params={"page": 1, "type": 1})
    data = response.json()
    if data:
        return data
    else:
        raise HTTPException(400, "Something went wrong.")

@router.get("/search")
async def search_anime(keyword: str):
    url = f"{BASE_URL}/search"
    params = {"keyw": keyword}
    response = requests.get(url, params=params)
    data = response.json()
    if data: 
        return data
    else:
        raise HTTPException(404, detail="Keyword not found")

@router.get("/details/{animeId}")
async def get_anime_details(animeId:str):
    try:
        url = f'{BASE_URL}/anime-details/{animeId}'
        response = requests.get(url)
        data = response.json()
        return data
    except:
        raise HTTPException(400, detail="Bad Request")
