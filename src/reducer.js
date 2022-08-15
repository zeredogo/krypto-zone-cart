import CartItem from "./CartItem";

const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if(action.type === 'REMOVE') {
        return {...state, cart: state.cart.filter((CartItem) => CartItem.id
            !== action.payload),
        }
    }
    return state
}

export default reducer;