import { InventoryProvider } from './context/InventoryContext';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';

const App = () => {
  return (
    <InventoryProvider>
      <div>
        <h1>Product Inventory System</h1>
        <NewProductForm />
        <ProductList />
      </div>
    </InventoryProvider>
  );
};

export default App;
