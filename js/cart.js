function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");

  if (!container) return;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `
      <p>${item.name} - $${item.price}
      <button onclick="removeItem(${index})">Remove</button>
      </p>
    `;
  });
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

displayCart();
