from fastapi import FastAPI
from app.api.gemini import router as gemini_router
from app.api.analyze import router as analyze_router

app = FastAPI(
    title="CivicCouncil AI API",
    version="1.0.0"
)

app.include_router(gemini_router)
app.include_router(analyze_router)

@app.get("/")
def home():
    return {
        "message": "CivicCouncil AI Backend Running 🚀"
    }