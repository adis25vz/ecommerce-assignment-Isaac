const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartItems");

if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
} else {
    cart.forEach(id => {
        const product = products.find(p => p.id === id);
        
        if (product) {
            const item = document.createElement("div");
            item.className = "cart-item"; // Add styling hook
            
            item.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            `;
            
            cartContainer.appendChild(item);
        }
    });
}