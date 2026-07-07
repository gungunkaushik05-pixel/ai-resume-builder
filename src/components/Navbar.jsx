function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          AI
        </div>

        <h1 className="text-2xl font-bold text-blue-700">
          Resume Builder
        </h1>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>

    </nav>
  );
}

export default Navbar;