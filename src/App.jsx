import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Orden';
import Payment from './Pago';
import './App.css'; // Asegúrate de tener este archivo

function App() {
  const [order, setOrder] = useState([]);
  const [paid, setPaid] = useState(false);

  const handleAddToOrder = (item) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, cantidad: orderItem.cantidad + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, cantidad: 1 }]);
    }
  };

  const handlePago = () => {
    setPaid(true); // Actualiza el estado para marcar como pagado
  };

  return (
    <div className="app-container">
      <h1>Sistema de Restaurante</h1>
      <div className="grid-container">
        <div className="menu-container">
          <Menu onAddToOrder={handleAddToOrder} />
        </div>
        <div className="order-container">
          {!paid ? (
            <>
              <Order order={order} />
              {order.length > 0 && (
                <button className="pay-button" onClick={handlePago}>
                  Pagar
                </button>
              )}
            </>
          ) : (
            <Payment order={order} setOrder={setOrder} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
