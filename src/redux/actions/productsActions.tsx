import { ActionTypes } from "../constants/actionTypes"

interface Product {
    id: string,
    name: string;
    price: number
}

export const setProducts = (products: Product[]) =>{
    return {
       type: ActionTypes.SET_PRODUCTS,
       payload: products,
    }
}

export const selectedProducts = (product: Product[]) =>{
    return {
       type: ActionTypes.SELECTED_PRODUCTS,
       payload: product,
    }
}