import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchProductDetails } from "../Redux/thunks/Product";

import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const ProductDetail = useSelector(
    (state: RootState) => state.products.productDetails
  );

  const result = useParams<{ id: string }>();
  const result2 = result.id;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductDetails(result2));
  }, [dispatch]);

  return (
    <div>
      <p>{ProductDetail.title}</p>
      <p>{ProductDetail.price}</p>
      <img
        src={ProductDetail.category.image}
        alt={ProductDetail.title}
        style={{ width: "200px" }}
      />
    </div>
  );
}
