import { useState } from "react";

export default function Home() {
  const [postalCode, setPostalCode] = useState("");

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gray-100 text-gray-900">
      <header className="flex justify-between items-center">
        <button className="text-2xl">☰</button> {}
        <button className="border px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
          Translate
        </button>
      </header>
      <div className="mt-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-md w-full max-w-md"
        />
        <div className="flex gap-4 mt-4">
          <p className="text-lg font-semibold">Next Bin Day:</p>
          <input
            type="text"
            placeholder="Enter Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
        </div>
      </div>

      {}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        {["Green", "Blue", "Black"].map((color) => (
          <div
            key={color}
            className={`p-4 rounded-md text-white ${
              color === "Green"
                ? "bg-green-600"
                : color === "Blue"
                ? "bg-blue-600"
                : "bg-black"
            }`}
          >
            <h2 className="text-lg font-bold">{color}</h2>
            <p>Details...</p>
          </div>
        ))}
      </div>

      {}
      <div className="mt-8 bg-white shadow-md p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Material</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Disposal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Plastic Bottle</td>
              <td className="border p-2">Recyclable</td>
              <td className="border p-2">Blue Bin</td>
            </tr>
            <tr>
              <td className="border p-2">Banana Peel</td>
              <td className="border p-2">Compost</td>
              <td className="border p-2">Green Bin</td>
            </tr>
          </tbody>
        </table>
      </div>

      {}
      <div className="mt-8 grid grid-cols-4 gap-2 text-center">
        {["Schedule", "For Businesses", "Landfill Hours", "A-Z"].map((item) => (
          <button
            key={item}
            className="border p-3 rounded-md bg-gray-300 hover:bg-gray-400"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
