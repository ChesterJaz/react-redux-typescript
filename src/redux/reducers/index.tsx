

import {combineReducers} from 'redux';
import { productReducer } from './productReducer';


const reducers = combineReducers({
    allProds: productReducer,
})

export default reducers;
