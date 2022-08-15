
const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if(action.type === 'REMOVE') {
        return {...state, cart:}
    }
    return state
}

export default reducer;