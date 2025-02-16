function MenuBar() {
  return (
    <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
      <span>macOS Simulator</span>
      <div>
        <button className="px-4 py-2 bg-blue-500 rounded">App Menu</button>
      </div>
    </div>
  );
}

export default MenuBar;
