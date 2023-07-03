import { createSlice } from "@reduxjs/toolkit";
import { Product, CartItem } from "../../types/types";
import { PayloadAction } from "@reduxjs/toolkit";


export type InitialState = {
  products: Product[];
  favoriteList: Product[];
  isLoading: boolean;
  productDetails: Product;
  cartItems: CartItem[];
  searchField: Product[]

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
  searchField:[],

  totalSum: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductDetail: (state, action: PayloadAction<Product>) => {
      state.productDetails = action.payload;
    },
    addOrRemoveFromFavorite: (state, actions: PayloadAction<Product>) => {
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
    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId.id
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
    removeFromCart: (state, action: PayloadAction<Product>) => {
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
    SearchProduct: (state, action: PayloadAction<string>) => {
      const filters = state.products.filter((item) =>
        item.title.toLocaleLowerCase().includes(action.payload)
      );
      state.searchField = filters;
    },
    sortProductLowestPrice:(state)=>{
     const result =state.products.sort((a,b)=>a.price -b.price)
     state.products=result
    },
    sortProductHighestPrice:(state)=>{
      const result=state.products.sort((a,b)=>b.price - a.price)
      state.products=result
    },
    sortProductAZ:(state)=>{
      const result=state.products.sort((a,b)=>a.title.localeCompare(b.title))
      state.products=result
    },
    sortProductZA:(state)=>{
      const result=state.products.sort((a,b)=>b.title.localeCompare(a.title))
      state.products=result
    }

  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;

export default productReducer;
