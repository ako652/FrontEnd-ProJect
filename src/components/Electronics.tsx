import React, { useEffect } from "react";

import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchProductDta } from "../Redux/thunks/Product";
import { Product } from "../types/types";
import Loading from "../components/Loading";


export default function Electronics() {
  const ElectronicsList = useSelector(
    (state: RootState) => state.products.products
  );
  const filterCategory = ElectronicsList.filter(
    (item) => item.category.name === "Clothes"
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductDta());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="ProductListstyle">
          {filterCategory.map((item: Product) => {
            return <ProductItem item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}
