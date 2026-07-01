from app.services.gemini_service import GeminiService

gemini = GeminiService()


class ProposalClassifier:

    def classify(self, proposal: str):

        prompt = f"""
You are an AI Decision Intelligence expert.

Classify this proposal into ONLY ONE category.

Possible Categories:

Transportation
Healthcare
Education
Environment
Energy
Waste Management
Public Safety
Tourism
Infrastructure
Agriculture
Technology
Other

Return ONLY the category.

Proposal:

{proposal}
"""

        return gemini.generate_response(prompt).strip()