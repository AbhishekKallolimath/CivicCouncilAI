import Header from "../components/Header";
import ProposalInput from "../components/ProposalInput";

function Home() {
  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <Header />
      <ProposalInput />
    </div>
  );
}

export default Home;