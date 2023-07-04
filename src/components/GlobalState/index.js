import React, { useState, useReducer, useEffect } from "react";
import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import axios from 'axios';
function GlobalState(props) {
    const [products, setPosts] = useState([]);
    useEffect(() => {
        axios({
          method: 'get',
          url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
          data: {},
        }).then((response) => {
          setPosts(response.data);
        });
      }, []);
      console.log(products)
//   const products = [
//     { id: "p1", title: "Gaming Mouse", price: 29.99 },
//     { id: "p2", title: "Harry Potter 3", price: 9.99 },
//     { id: "p3", title: "Used plastic bottle", price: 0.99 },
//     { id: "p4", title: "Half-dried plant", price: 2.99 }
//   ];

  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;