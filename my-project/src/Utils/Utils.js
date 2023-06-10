export function getCartNumber(cartItems){
    return cartItems.reduce((sum, cartItem)=> sum + cartItem.quantity, 0)
}

export function getCartCost(cartItems){
    return cartItems.reduce((sum, cartItem)=> sum + parseInt(cartItem.product.price) * cartItem.quantity, 0)
}