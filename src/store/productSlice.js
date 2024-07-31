import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    // },
  },
  // eslint-disable-next-line no-unused-vars
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.fulfilled, (state, action)=>{
       state.data = action.payload;
    })
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

//async thunk

export const getProducts = createAsyncThunk("products", async () => {
  //api
  //https://fakestoreapi.com/products
  await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
        return res.data
        // console.log(res)
    //   dispatch(fetchProducts(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// export function getProducts() {
//   // eslint-disable-next-line no-unused-vars
//   return async function getProductsThunk(dispatch, getState) {};
// }
