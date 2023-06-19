import React from "react";

import { CartItem } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { productActions } from "../Redux/slices/Product";
import Card from "@mui/material/Card";
import Button from "react-bootstrap/Button";
import CardMedia from "@mui/material/CardMedia";

type prop = {
  cartItemsList: CartItem[];
};

export default function CardPaymentBody({ cartItemsList }: prop) {
  const totalSum = useSelector((state: RootState) => state.products.totalSum);
  const dispatch = useDispatch();
  function addToCart(product: CartItem) {
    dispatch(productActions.addToCart(product));
  }
  function removeFromCart(product: CartItem) {
    dispatch(productActions.removeFromCart(product));
  }

 

  return (
    <div>
      <h1>CART - SEND TO SOMEONE</h1>
      <h3>DELIVERY</h3>
      {cartItemsList.map((item) => {
        return (
          <div>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.category.image}
                alt={item.title}
              />
              <p>{item.title}</p>
              <div>
                <button onClick={() => addToCart(item)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => removeFromCart(item)}>-</button>
              </div>
            </Card>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>price : ${item.price}</p>
            </div>
          </div>
        );
      })}
      <h6>Total price : ${totalSum}</h6>
      <Button type="submit">Check Out!</Button>
    </div>
  );
}
