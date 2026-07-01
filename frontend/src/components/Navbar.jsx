function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        CivicCouncil AI
      </h1>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Start Analysis
      </button>
    </nav>
  );
}

export default Navbar;