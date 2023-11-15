import { actionTypes } from "./Type"

export const initialState = {
    count: 0
}

export const countReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.Increamend:
            return {
                ...state,
                count: state.count + 1
            };

        // Add other cases for different action types if needed

        default:
            return state;
    }
}
