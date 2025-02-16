function Dock() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center items-center fixed bottom-0 w-full">
      <div className="bg-gray-700 p-2 rounded mx-2">Finder</div>
      <div className="bg-gray-700 p-2 rounded mx-2">Safari</div>
      <div className="bg-gray-700 p-2 rounded mx-2">Terminal</div>
    </div>
  );
}

export default Dock;
