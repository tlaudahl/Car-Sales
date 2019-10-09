import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const initialState = {
        additionalPrice: 0,
        car: {
            price: 26395,
            name: '2019 Ford Mustang',
            image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        },
        store: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 }
        ]
}


export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const itemToAdd = state.store.find(item => {
                if (item.id.toString() === action.payload.id.toString()) {
                    return {
                        item
                    }
                }
            })
            return {
                ...state,
                additionalPrice: state.additionalPrice + itemToAdd.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, itemToAdd]
                }
            }
        case REMOVE_ITEM:
            const itemToRemove = state.car.features.find(item => {
                if (item.id.toString() === action.payload.id.toString()) {
                    return {
                        item
                    }
                }
            })
            return {
                ...state,
                additionalPrice: state.additionalPrice - itemToRemove.price,
                car: {
                    ...state.car,
                    features: [...state.car.features].filter(item => item.id !== itemToRemove.id)
                }
            }
        default:
            return state;
    }
}