export function getCartNumber(cartItems){
    return cartItems.reduce((sum, cartItem)=> sum + cartItem.quantity, 0)
}