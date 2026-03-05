const products = [
{
name: "Winter Jacket",
price: 120,
image: "images/design suit.jpg"
},
{
name: "Warm Cardigan",
price: 60,
image: "images/Warm Cardigan.jpg"
},
{
name: "Winter Gloves",
price: 25,
image: "images/Winter gloves.jpg"
},
{
name: "Winter Shoes",
price: 95,
image: "images/tofflor sandals.jpg"
},
{
name: "Winter Tofflor",
price: 40,
image: "images/winter tofflor.jpg"
},
{
name: "Presentation Jacket",
price: 85,
image: "images/design presentation.jpg"
},
{
name: "Suit Jacket",
price: 150,
image: "images/design suit.jpg"
},
{
name: "Scarf",
price: 30,
image: "images/design presentation 2.jpg"
}
];

const productGrid = document.getElementById("productGrid");

products.forEach((product) => {

const productCard = document.createElement("div");
productCard.className = "product";

productCard.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>$${product.price}</p>
<button onclick="addToCart('${product.name}', ${product.price})">
Add to Cart
</button>
`;

productGrid.appendChild(productCard);

});