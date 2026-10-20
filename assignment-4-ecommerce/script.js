
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2299,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 1999,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
        id: 4,
        name: "Classic T-Shirt",
        price: 699,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
        id: 5,
        name: "Desk Lamp",
        price: 899,
        category: "Home",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400"
    },
    {
        id: 6,
        name: "Coffee Mug",
        price: 299,
        category: "Home",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400"
    },
    {
        id: 7,
        name: "Sunglasses",
        price: 499,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
    },
    {
        id: 8,
        name: "Leather Wallet",
        price: 799,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400"
    }
];

// HTML elements
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const cartCount = document.getElementById("cart-count");
const noProducts = document.getElementById("no-products");
const resultsCount = document.getElementById("results-count");

let cart = 0;

// Display products
function displayProducts(productArray) {
    productList.innerHTML = "";

    resultsCount.textContent =
        `Showing ${productArray.length} products`;

    if (productArray.length === 0) {
        noProducts.classList.remove("hidden");
        return;
    }

    noProducts.classList.add("hidden");

    productArray.forEach(function(product) {
        const card = document.createElement("article");
        card.className = "product-card";

        card.innerHTML = `
            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <span class="product-category">
                ${product.category}
            </span>

            <h3>${product.name}</h3>

            <p class="product-price">
                ₹${product.price.toLocaleString("en-IN")}
            </p>

            <button class="add-btn" data-id="${product.id}">
                Add to Cart
            </button>
        `;

        productList.appendChild(card);
    });
}

// Search and category filter
function filterProducts() {
    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(function(product) {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Add products to cart
productList.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-btn")) {
        cart++;
        cartCount.textContent = cart;

        event.target.textContent = "Added ✓";
        event.target.disabled = true;
    }
});

// Listen for search and filter changes
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Show all products when the page opens
displayProducts(products);
