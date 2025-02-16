import { useState } from "react";
import { Draggable } from "react-draggable";

function Finder() {
  const [files, setFiles] = useState(["File 1", "File 2", "File 3"]);

  return (
    <Draggable>
      <div className="bg-white p-4 w-80 h-80 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Finder</h2>
        <ul className="mt-4">
          {files.map((file, index) => (
            <li key={index} className="border-b border-gray-200 p-2">
              {file}
            </li>
          ))}
        </ul>
      </div>
    </Draggable>
  );
}

export default Finder;
