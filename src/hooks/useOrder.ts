import { useState } from "react";
import { MenuItem, OrderItem } from "../interfaces";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = Object.assign({}, { ...item, quantity: 1 });
      setOrder([...order, newItem]);
    }
  };

  const handleTip = (tip: number) => {
    setTip(tip);
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    handleTip,
    addItem,
    removeItem,
    placeOrder,
  };
};

export default useOrder;
