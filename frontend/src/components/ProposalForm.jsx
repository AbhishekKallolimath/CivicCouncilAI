import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function ProposalForm({ onAnalyze }) {
  const [proposal, setProposal] = useState("");

  const handleSubmit = () => {
    if (!proposal.trim()) {
      alert("Please enter a proposal.");
      return;
    }

    onAnalyze(proposal);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mt: 5,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Enter Community Proposal
      </Typography>

      <Typography color="text.secondary" mb={2}>
        Paste a proposal to analyze its impact using AI.
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={8}
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        placeholder="Example: Build a metro line connecting the airport to the city center..."
      />

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Analyze Proposal
      </Button>
    </Paper>
  );
}

export default ProposalForm;