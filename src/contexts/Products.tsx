import { createContext, useState } from "react";

const productsContext = createContext({
  products: [],
  setProducts: (_products: any) => {},
});

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState([]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };
