const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-600">
            ALX Listing
          </h1>

          <div className="flex gap-4">
            <button className="text-sm font-medium">Sign in</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
              Sign up
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none"
        />

        <div className="flex gap-3 overflow-x-auto text-sm">
          {["Rooms", "Mansion", "Countryside", "Villa", "Apartment"].map(
            (type) => (
              <span
                key={type}
                className="px-4 py-2 bg-gray-100 rounded-full whitespace-nowrap"
              >
                {type}
              </span>
            )
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;
