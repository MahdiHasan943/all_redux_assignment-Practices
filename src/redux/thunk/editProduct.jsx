import { updateProductA } from "../actionType/ProductAction";

export const updateProducts = (id, product) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/tutorial/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product), // Include the updated product data in the request body
      });

      const data = await res.json();

      if (data.acknowledged) {
        // Dispatch the action with the updated product data
        dispatch(updateProductA(id, product));
      }
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle the error as per your application requirements
    }
  };
};
