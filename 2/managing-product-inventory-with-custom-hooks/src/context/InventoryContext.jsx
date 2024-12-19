import { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Nike', price: 100 },
    { id: 2, name: 'Adidas', price: 200 },
    // Add more dummy products as needed
  ]);

  const fetchProducts = () => {
    return products;
  };

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <InventoryContext.Provider value={{ products, fetchProducts, addProduct, removeProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  return useContext(InventoryContext);
};
