import json

from app.services.gemini_service import GeminiService


class DecisionEngine:

    def __init__(self):
        self.gemini = GeminiService()

    def analyze(self, proposal: str):

        prompt = f"""
You are CivicCouncil AI.

You are an expert Decision Intelligence Platform.

Analyze the proposal below.

Return ONLY valid JSON.

Required JSON structure:

{{
  "title":"",
  "category":"",
  "summary":"",
  "stakeholders":[],
  "benefits":[],
  "risks":[],
  "recommendation":"",
  "priority":"",
  "consensus_score":0
}}

Proposal:

{proposal}

Do not return markdown.

Do not use ```json.

Return only JSON.
"""

        response = self.gemini.generate_response(prompt)

        try:
            return json.loads(response)

        except Exception:

            return {
                "error": "Invalid JSON returned",
                "raw_response": response
            }