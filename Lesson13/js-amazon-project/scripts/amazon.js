/* (Save data step) Storing Product information in an array of Objects*/
/*const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090 //better to store prices in cents
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4.0,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}, {
  image: "images/products/black-2-slot-toaster.jpg",
  name: "2 Slot Toaster - Black",
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
}]; */ // We are now using the products array in the data folder

/* Used for generating HTML for products*/
let productsHTML = '';

const gridElement = document.querySelector('.js-products-grid');

/* This will loop through the array, passing through each 'product' in products */
products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)} 
      </div>

      <div class="product-quantity-container">
        <select class="js-select-value-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>`; 
  });

gridElement.innerHTML = productsHTML;


const addButtonElement = document.querySelectorAll('.js-add-to-cart');
addButtonElement.forEach((button) => {
  button.addEventListener('click', () => {
    const {productId} = button.dataset;

    let matchingItem; // used as a truthy value, if gets assigned a value it becomes true and if-statement will run (it exists in cart and increase quantity), else will be false and add item to cart
    cart.forEach((item) => {
      if(item.productId === productId){
        matchingItem = item;
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

    let cartQuantity = 0;
    const cartQuantityElement = document.querySelector('.cart-quantity');
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    })
    cartQuantityElement.innerHTML = cartQuantity;
  });
})
