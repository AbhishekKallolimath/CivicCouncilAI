from fastapi import APIRouter
from pydantic import BaseModel

from app.services.decision_engine import DecisionEngine

router = APIRouter()

engine = DecisionEngine()


class AnalyzeRequest(BaseModel):
    proposal: str


@router.post("/analyze")
def analyze(request: AnalyzeRequest):

    result = engine.analyze(request.proposal)

    return result