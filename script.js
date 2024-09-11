// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "/placeholder.svg?height=150&width=150" },
    { id: 2, name: "Product 2", price: 29.99, image: "/placeholder.svg?height=150&width=150" },
    { id: 3, name: "Product 3", price: 39.99, image: "/placeholder.svg?height=150&width=150" },
    { id: 4, name: "Product 4", price: 49.99, image: "/placeholder.svg?height=150&width=150" },
];

const cart = [];

// Function to render products
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to update the cart
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

// Function to handle checkout
function checkout() {
    alert(`Thank you for your purchase! Total: $${document.getElementById("cart-total").textContent}`);
    cart.length = 0;
    updateCart();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    document.getElementById("checkout-btn").addEventListener("click", checkout);
});