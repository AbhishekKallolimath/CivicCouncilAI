import { useState } from "react";
import api from "../services/api";

export default function useAnalysis() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  async function analyze(proposal) {
    setLoading(true);

    try {
      const response = await api.post("/analyze", {
        proposal,
      });

      setAnalysis(response.data);
    } catch (err) {
      console.error(err);
      alert("Analysis failed.");
    }

    setLoading(false);
  }

  return {
    analyze,
    loading,
    analysis,
  };
}