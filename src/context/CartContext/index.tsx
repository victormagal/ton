import React, { createContext, useState } from "react";

interface Product {
  id: string,
  name: string,
  price: number
}

interface Cart {
  products: Product[],
  addProductToCart: (id: string, name: string, price: number) => void,
  removeProductToCart: (index: number) => void
}

export const CartContext = createContext<Cart>({} as Cart);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProductToCart = (id: string, name: string, price: number) => {
    const item = { id, name, price };
    setProducts((prevState): Product[] => ([
      ...prevState,
      item
    ]));
  }

  const removeProductToCart = (index: number) => {
    const filteredCart: Product[] = products?.filter(
      product => products?.indexOf(product) !== index
    );
    setProducts(filteredCart);
  }
  
  return (
    <CartContext.Provider value={{ addProductToCart, products, removeProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
