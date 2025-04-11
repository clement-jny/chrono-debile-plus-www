import type { IStock } from '@/types/stock';

const StockCard = ({ stock }: { stock: IStock }) => {
  return (
    <div className='stock-card border p-4 rounded shadow-md mb-4 w-2xs'>
      <h2>Product ID: {stock.productId}</h2>
      <p>Product name: {stock.productName}</p>
      <p>Quantity: {stock.quantity}</p>
      <button onClick={() => alert(`Stock ID: ${stock.productId}`)}>
        Show ID
      </button>
    </div>
  );
};
export { StockCard };
