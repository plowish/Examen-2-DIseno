import React from 'react';

const Order = ({ order }) => {
  // Función para calcular el total de la orden
  const calcularTotal = () => {
    return order.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full text-black">
      <h2 className="text-2xl font-bold text-center mb-4">Orden Actual</h2>

      {order.length === 0 ? (
        <p className="text-center">No hay platillos en la orden.</p>
      ) : (
        <ul className="mb-4">
          {order.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.cantidad}</span>
              <span>${(item.price * item.cantidad).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-lg font-bold text-center mb-4">Total: ${calcularTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Order;
