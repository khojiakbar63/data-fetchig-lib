import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-amber-400 to-orange-500 min-h-screen w-screen flex flex-col items-center py-10 px-4">
      <h1 className="font-extrabold text-5xl text-white mb-10 drop-shadow-lg">Posts</h1>
      
      {loading ? (
        <div className="text-white text-xl font-semibold animate-pulse">Loading posts ...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-bold text-gray-800">{item.id}. {item.title}</h2>
              <p className="text-gray-600 mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
