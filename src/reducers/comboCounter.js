
import {combineReducers} from 'redux'
import shopReducer from './cart-reducer';

const allReducers= combineReducers({
    shop: shopReducer
});
export default allReducers