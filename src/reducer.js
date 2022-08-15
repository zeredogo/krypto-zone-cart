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
    if(action.type === 'INCREASE'){
        let tempCart = state.cart.map((CartItem) => {
            if(CartItem.id === action.payload) {
                return {...CartItem, amount: CartItem.amount + 1}
            }
            return CartItem
        })
        return {...state, cart: tempCart}
    }
    if(action.type === 'DECREASE'){
        let tempCart = state.cart.map((CartItem) => {
            if(CartItem.id === action.payload) {
                return {...CartItem, amount: CartItem.amount - 1}
            }
            return CartItem
        }).filter((CartItem) => CartItem.amount !== 0)
        return {...state, cart: tempCart}
    }

    return state
}

export default reducer;