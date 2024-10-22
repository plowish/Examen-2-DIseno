import React, { useState } from 'react';

const Payment = ({ order, setOrder }) => {
  const [pag, setPag] = useState(false);

  // Funcion para calcular el total de la orden
  const calcularTotal = () => {
    return order.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

  // Funcion para manejar el pago
  const handlePago = () => {
    setPag(true); 
    setOrder([]); 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full text-black">
      <h2 className="text-2xl font-bold text-center mb-4">Confirmacion de Pago</h2>

      {/* Si no se ha pagado aun, muestra el total y el boton de pagar */}
      {!pag ? (
        <>
          <ul className="mb-4">
            {order.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.cantidad}</span>
                <span>${(item.price * item.cantidad).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-center mb-4">
            Total: ${calcularTotal().toFixed(2)}
          </h3>

          <button
            className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg"
            onClick={handlePago}
          >
            Pagar
          </button>
        </>
      ) : (
        // Si el pago ha sido realizado, muestra el mensaje de confirmacion
        <p className="text-xl font-bold text-green-600 text-center">
          Pago realizado con exito
        </p>
      )}
    </div>
  );
};

export default Payment;