import { Header } from '@/components/Header';
import { StockList } from './components/StockList';

function App() {
  return (
    <main>
      <Header />
      {/* In home page, display summary for last added stocks and last modified price */}
      <StockList />
    </main>
  );
}

export default App;
