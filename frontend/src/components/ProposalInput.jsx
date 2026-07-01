import { useState } from "react";
import { api } from "../services/api";

function ProposalInput() {
  const [proposal, setProposal] = useState("");
  const [result, setResult] = useState(null);

  async function analyzeProposal() {
    try {
      const response = await api.post("/analyze", {
        proposal: proposal,
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing proposal");
    }
  }

  return (
    <div>
      <textarea
        rows="10"
        style={{ width: "100%", padding: "15px" }}
        placeholder="Paste your proposal here..."
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
      />

      <br />
      <br />

      <button onClick={analyzeProposal}>
        Analyze Proposal
      </button>

      <br />
      <br />

      {result && (
        <pre
          style={{
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            overflowX: "auto",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default ProposalInput;