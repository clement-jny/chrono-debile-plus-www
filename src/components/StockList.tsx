import type { IStock } from '@/types/stock';
import { StockCard } from './StockCard';

const StockList = () => {
  const mockStocks: IStock[] = [
    { productId: 1, productName: 'AAPL', quantity: 150 },
    { productId: 2, productName: 'GOOGL', quantity: 2800 },
    { productId: 3, productName: 'AMZN', quantity: 3400 },
    { productId: 4, productName: 'MSFT', quantity: 299 },
    { productId: 5, productName: 'TSLA', quantity: 700 },
    { productId: 6, productName: 'FB', quantity: 350 },
    { productId: 7, productName: 'NFLX', quantity: 600 },
    { productId: 8, productName: 'NVDA', quantity: 220 },
    { productId: 9, productName: 'DIS', quantity: 180 },
    { productId: 10, productName: 'V', quantity: 230 },
  ];

  const totalQuantity = mockStocks.reduce(
    (total, stock) => total + stock.quantity,
    0
  );
  console.log('Total quantity of stocks:', totalQuantity);

  //   const lastModifiedPrice = mockStocks.map((stock) => stock.quantity * 10);
  //   console.log('Last modified prices:', lastModifiedPrice);

  //   const totalModifiedPrice = lastModifiedPrice.reduce(
  //     (total, price) => total + price,
  //     0
  //   );
  //   console.log('Total modified price:', totalModifiedPrice);
  return (
    <div>
      <h1>Summary of last added stocks</h1>
      <p>Total quantity of stocks: {totalQuantity}</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {mockStocks.map((stock) => (
          <StockCard key={stock.productId} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export { StockList };
