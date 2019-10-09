import { carReducer } from '../reducers';


export const ADD_ITEM = "ADD_ITEM";
export const addItem = feature => {
    console.log(feature);
    return {
        type: ADD_ITEM,
        payload: feature, // <=== ID of item we want to add
    }
}

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = feature => {
    console.log(feature);
    return {
        type: REMOVE_ITEM,
        payload: feature,
    }
}