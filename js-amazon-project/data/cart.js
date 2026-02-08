export const cart = [];

export function addToCart(productId) {
  let matchingItem; // used as a truthy value, if gets assigned a value it becomes true and if-statement will run (it exists in cart and increase quantity), else will be false and add item to cart
    cart.forEach((cartItem) => {
      if(cartItem.productId === productId){
        matchingItem = cartItem;
      }
    })

    let selectValue = document.querySelector(`.js-select-value-${productId}`);
    let quantity = Number(selectValue.value)

    if (matchingItem){
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity
      })
    }
};