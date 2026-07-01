from fastapi import APIRouter
from pydantic import BaseModel

from app.services.gemini_service import GeminiService

router = APIRouter()

gemini = GeminiService()


class PromptRequest(BaseModel):
    prompt: str


@router.post("/ask")
def ask_gemini(request: PromptRequest):
    answer = gemini.generate_response(request.prompt)

    return {
        "response": answer
    }