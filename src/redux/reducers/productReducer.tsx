import { ActionTypes } from "../constants/actionTypes";

export type Product = {
    id: number;
    title: string;
    category: string;
}

export type State = {
    products: Product[];
}

export type Action = {
    type: string;
    payload? : any;
}

export const initialState: State = {
    products:[{
        id: 1,
        title: "Chester",
        category: "Dev",
    }]
}


export const productReducer = (state: State = initialState, action: Action) =>{
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return state;
    }
}