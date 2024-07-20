import type { MenuItem } from "../interfaces";
import { formatCurrency } from "../utils/formatters";

interface MenuItemProps {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 text-lg rounded-lg flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
};

export default MenuItem;
