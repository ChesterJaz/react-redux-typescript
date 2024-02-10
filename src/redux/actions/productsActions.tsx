import { Product } from "../../types/types"
import { ActionTypes } from "../constants/actionTypes"



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