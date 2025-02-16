import { useState } from "react";
import Finder from "./components/Finder";
import Safari from "./components/Safari";
import Terminal from "./components/Terminal";

function App() {
  const [isFinderOpen, setIsFinderOpen] = useState(true);
  const [isSafariOpen, setIsSafariOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  return (
    <div className="h-screen">
      <MenuBar />
      <Dock />
      <div className="absolute top-16 left-16 z-50">
        {isFinderOpen && <Finder />}
        {isSafariOpen && <Safari />}
        {isTerminalOpen && <Terminal />}
      </div>

      {/* Nút mở/đóng cửa sổ */}
      <button onClick={() => setIsFinderOpen(!isFinderOpen)} className="absolute top-10 left-10 bg-blue-500 text-white p-2 rounded">
        {isFinderOpen ? "Close Finder" : "Open Finder"}
      </button>
      <button onClick={() => setIsSafariOpen(!isSafariOpen)} className="absolute top-20 left-10 bg-blue-500 text-white p-2 rounded">
        {isSafariOpen ? "Close Safari" : "Open Safari"}
      </button>
      <button onClick={() => setIsTerminalOpen(!isTerminalOpen)} className="absolute top-30 left-10 bg-blue-500 text-white p-2 rounded">
        {isTerminalOpen ? "Close Terminal" : "Open Terminal"}
      </button>
    </div>
  );
}

export default App;
