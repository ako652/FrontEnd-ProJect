import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { fetchProductDta } from "../Redux/thunks/Product";
import { Product } from "../types/types";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import SortForm from "../components/SortForm";

export default function ProductsPage() {
  const Products= useSelector(
    (state: RootState) => state.products.products
  );
  const SearchProducts = useSelector(
    (state:RootState)=> state.products.searchField
  )
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductDta());
  }, [dispatch]);
  let ProductList =Products

  if (SearchProducts.length>0){
    ProductList=SearchProducts

  } 
  
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <SearchForm />
        <SortForm />
      </div>
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
