import { removeProducct } from "../actionType/ProductAction";

export const removeProducts = (id) => {
    return async(dispatch,getState) => {
        const res = await fetch(`http://localhost:5000/api/v1/tutorial/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",

            },
            
        })
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(removeProducct(id))
        }

    }
}