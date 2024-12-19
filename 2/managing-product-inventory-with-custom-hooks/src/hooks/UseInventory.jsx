import { useState } from 'react';

const useInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Nike', price: 100 },
    { id: 2, name: 'Adidas', price: 200 },
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

  return {
    products,
    fetchProducts,
    addProduct,
    removeProduct,
  };
};

export default useInventory;
