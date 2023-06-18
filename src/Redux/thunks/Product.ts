import { productActions } from "../slices/Product";
import { AppDispatch } from "../store";

const url = "https://api.escuelajs.co/api/v1/products/";

export function fetchProductDta() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}

export function fetchProductDetails(result2: string | undefined) {
  const productUrl = `https://api.escuelajs.co/api/v1/products/${result2}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();

    dispatch(productActions.getProductDetail(productData));
  };
}
