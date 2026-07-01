import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProposalForm from "../components/ProposalForm";
import useAnalysis from "../hooks/useAnalysis";

function Home() {
  const { analyze, loading, analysis } = useAnalysis();

  return (
    <>
      <Navbar />
      <Hero />

      <ProposalForm onAnalyze={analyze} />

      {loading && (
        <h2 style={{ textAlign: "center", marginTop: 30 }}>
          🤖 CivicCouncil AI is analyzing...
        </h2>
      )}

      {analysis && (
        <pre
          style={{
            marginTop: 30,
            background: "#f5f5f5",
            padding: 20,
            borderRadius: 10,
          }}
        >
          {JSON.stringify(analysis, null, 2)}
        </pre>
      )}
    </>
  );
}

export default Home;