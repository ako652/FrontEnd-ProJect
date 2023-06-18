import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchProductDta } from "../Redux/thunks/Product";
import { Product } from "../types/types";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";

export default function ProductsPage() {
  const ProductList = useSelector(
    (state: RootState) => state.products.products
  );
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductDta());
  }, [dispatch]);
  
  
  return (
    <div>
      <SearchForm />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="ProductListstyle">
          {ProductList.map((item: Product) => {
            return <ProductItem item={item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
}
