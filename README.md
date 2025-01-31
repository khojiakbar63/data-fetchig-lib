```jsx 
import React, { useState, useEffect } from "react";

// -------------------------------------  APP COMPONENT  ------------------------------------- //
const App: React.FC = () => {
  // -------------------------------------  STATE  ------------------------------------- //
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Start as true since data isn't loaded

  // -------------------------------------  FETCH DATA ON PAGE LOAD  ------------------------------------- //
  useEffect(() => {
    async function fetchData() {
      setLoading(true); // ✅ Set loading to true before fetching
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // ✅ Set loading to false after fetching
      }
    }

    fetchData();
  }, []);

  // -------------------------------------  RENDER UI  ------------------------------------- //
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Page Title */}
        <h1 className="font-extrabold text-center text-4xl text-indigo-700 mb-6">
          📜 Posts List
        </h1>

        {/* Show Loader or Posts */}

        {
        loading ? (
          <div className="text-center text-indigo-600 font-semibold text-lg">
            🔄 Loading posts...
          </div>
        ) : (
          <ul className="space-y-4">
            {data.map((item) => (
              <li
                key={item.id}
                className="bg-indigo-50 hover:bg-indigo-100 transition duration-300 shadow-md rounded-xl p-4 border-l-4 border-indigo-500"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
              </li>
            ))}
          </ul>
        )
        }
      </div>
    </div>
  );
};

export default App;


```# data-fetchig-lib
