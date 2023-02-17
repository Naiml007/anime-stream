from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()
BASE_URL = "https://api.consumet.org/anime/gogoanime"
headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        }

@router.get("/recent_release")
async def recent_release():
    url = f"{BASE_URL}/recent-episodes"
    response = requests.get(url, params={"page": 1, "type": 1}, headers=headers)
    data = response.json()
    if data:
        return data
    else:
        raise HTTPException(400, "Something went wrong.")

@router.get("/search")
async def search_anime(query: str):
    url = f"{BASE_URL}/{query}"
    response = requests.get(url, headers=headers)
    data = response.json()
    if data: 
        return data
    else:
        raise HTTPException(404, detail="Keyword not found")

@router.get("/details/{id}")
async def get_anime_details(id:str):
    try:
        url = f'{BASE_URL}/info/{id}'
        response = requests.get(url, headers=headers)
        data = response.json()
        return data
    except:
        raise HTTPException(400, detail="Bad Request")
