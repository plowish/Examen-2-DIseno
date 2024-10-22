import React, { useEffect, useState } from 'react';

export const Menu = ({ onAddToOrder }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-menu-9b5g.onrender.com/menu'); // URL de la API
        if (!response.ok) {
          throw new Error('Error al obtener el menú');
        }
        const result = await response.json();
        setData(result.slice(0, 5)); // Mostramos los primeros 5 platillos
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando menú...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full'>
      <h1 className='text-2xl font-bold text-center mb-4'>Menú</h1>
      <ul className='grid grid-cols-1 gap-4'>
        {data.map((item) => (
          <li key={item.id} className='bg-gray-100 p-4 rounded-lg'>
            <h2 className='text-lg font-bold text-center'>{item.name}</h2>
            <p className='text-center'>${item.price.toFixed(2)}</p>
            <p className='text-center text-gray-500'>{item.description}</p>
            <button 
              className='mt-2 bg-blue-500 text-white py-1 px-4 rounded'
              onClick={() => onAddToOrder(item)}
            >
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
