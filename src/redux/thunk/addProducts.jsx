import { Product_Action } from "../actionType/ProductAction";

export const AddProducts = (product) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch(`http://localhost:5000/api/v1/tutorial`, {
                method: "POST",
                body:JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",
              }  
            })
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            if (data.acknowledged) {
                dispatch(
                    Product_Action({
                        ...product,
                        _id: data.insertedId,
                    })
                );
            }
        }
        catch (e) {
            console.log(e);
            
        }
    }
}