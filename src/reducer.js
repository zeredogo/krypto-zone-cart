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
    if(action.type === 'GET_TOTALS') {
        const { total, amount } = state.cart.reduce(
            ( cartTotal, cartItem ) => {
                const { price, amount } = cartItem
                const itemTotal = price* amount

                cartTotal.total += itemTotal
                 cartTotal.amount += amount
                return cartTotal;
            },
            {
            total: 0,
            amount: 0,
        }
        )

       // total = parseFloat(total.toFixed(2))

        return {...state, total, amount}
    }
    if (action.type === 'LOADING' ) {
        return {...state, loading: true }
    }
    if (action.type === 'DISPLAY_ITEMS' ) {
        return {...state, cart: action.payload, loading: false }
    }
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload.id) {
              if(action.payload.type === 'inc'){
                return {...cartItem, amount: cartItem.amount + 1 }
              }
              if(action.payload.type === 'dec'){
                return {...cartItem, amount: cartItem.amount - 1 }
              }
            }
            return cartItem
        }).filter((CartItem) => CartItem.amount !== 0)
        return {...state, cart: tempCart}
    }

    return state
}

export default reducer;