function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
      <h1 className="text-2xl font-bold text-blue-600">
        CivicCouncil AI
      </h1>

      <div className="flex gap-8 text-gray-700">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Dashboard</a>
        <a href="#">About</a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;