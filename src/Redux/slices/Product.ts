import { createSlice } from "@reduxjs/toolkit";
import { Product, CartItem } from "../../types/types";

export type InitialState = {
  products: Product[];
  favoriteList: Product[];
  isLoading: boolean;
  productDetails: Product;
  cartItems: CartItem[];

  totalSum: number;
};

const initialState: InitialState = {
  products: [],
  favoriteList: [],
  isLoading: true,
  productDetails: {
    id: 0,
    title: "",
    price: 0,
    description: "",

    category: {
      id: 0,
      name: "",
      image: "",
    },
  },

  cartItems: [],

  totalSum: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductDetail: (state, action) => {
      state.productDetails = action.payload;
    },
    addOrRemoveFromFavorite: (state, actions) => {
      const IsProductInFavorite = state.favoriteList.some(
        (item) => item.id === actions.payload.id
      );
      if (IsProductInFavorite) {
        state.favoriteList = state.favoriteList.filter(
          (item) => item.id !== actions.payload.id
        );
      } else {
        state.isLoading = false;
        const newFavorite = { ...actions.payload, isFavorite: true };
        state.favoriteList.push(newFavorite);
      }
    },
    addToCart: (state, action) => {
      const productId = action.payload.id;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        const newCartItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(newCartItem);
      }

      const totalSum = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalSum = totalSum;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload.id;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity = existingItem.quantity - 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
      }
      const totalSum = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalSum = totalSum;
    },
    SearchProduct: (state, action) => {
      const filters = state.products.filter((item) =>
        item.title.toLocaleLowerCase().includes(action.payload)
      );
      state.products = filters;
    },
  
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export default productReducer;
