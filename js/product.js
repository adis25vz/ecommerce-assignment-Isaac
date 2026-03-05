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
price: 80,
image: "images/design presentation.jpg"
},
{
name: "Presentation Jacket 2",
price: 90,
image: "images/design present 2.jpg"
},
{
name: "Presentation Jacket 3",
price: 100,
image: "images/design presentation 3.jpg"
}
];

const grid = document.getElementById("productGrid");

if (grid) {

products.forEach(product => {

const card = document.createElement("div");

card.innerHTML = `
<img src="${product.image}" width="200">
<h3>${product.name}</h3>
<p>$${product.price}</p>
<button onclick="addToCart('${product.name}', ${product.price})">
Add to Cart
</button>
`;

grid.appendChild(card);

});

}