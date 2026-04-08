import React, { useEffect, useState } from 'react'

const Harrypotter = () => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await fetch('https://hp-api.onrender.com/api/characters');
            const data = await res.json();
            setCharacters(data);
            setLoading(false);
        }
        fetchCharacters();
    }, []);

  return (
  <div className="min-h-screen bg-gray-100 p-5">
    <h1 className="text-3xl font-bold text-center mb-6">
      Harry Potter Characters
    </h1>

    {loading ? (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((char, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md text-center"
          >
            <img
              src={char.image || "https://via.placeholder.com/150"}
              alt={char.name}
              className="w-32 h-32 object-cover mx-auto rounded-full mb-3"
            />
            <h2 className="text-lg font-semibold">{char.name}</h2>
            <p className="text-gray-600">{char.house}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Harrypotter