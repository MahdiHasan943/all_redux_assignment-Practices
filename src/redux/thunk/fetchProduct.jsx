import { loadProduct } from "../actionType/ProductAction";

 
export const loadProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/api/v1/tutorial");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadProduct(data.data));
    }
  };
};

 