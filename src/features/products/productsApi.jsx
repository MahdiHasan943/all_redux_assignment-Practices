import axios from "axios";
import { instance } from "../../utils/axios.config";

export const fetchProducts = async () => {
    try {
        const data = await instance.get('api/v1/products')
      return data.data.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const postProducts = async (productData) => {
   await instance.post('api/v1/products',productData)
}

export const deleteProducts = async (id) => {
    await instance.delete(`api/v1/products/${id}`)
}
 

export const editProduct = async (id, product) => {
    try {
        const response = await instance.patch(`api/v1/products/${id}`, product);
        return response.data;  // Return the updated product data
    } catch (error) {
        throw error;  // Rethrow the error to handle it in the async thunk
    }
};
