document.addEventListener('DOMContentLoaded', function () {
    // Get category from search params
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Fetch products based on the selected category
    fetchProducts(category);
});

function fetchProducts(category) {
    let apiUrl;

    // if selected category is "All", show all products; otherwise, set the API URL accordingly
    if (!category || category.toLowerCase() === 'all') {
        apiUrl = 'https://fakestoreapi.com/products';
    } else {
        apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    }

    // Fetch products in selected category
    fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    // Highlight the selected category in the filter menu
    highlightSelectedCategory(category);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Create an anchor tag for product
        const productLink = document.createElement('a');
        productLink.href = `product.html?id=${product.id}`; // Replace with your actual product page URL

        // product details inside the anchor tag
        productLink.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p class="price"><strong>Price:</strong> $${product.price}</p>
        `;

        // Append anchor tag to product container
        productDiv.appendChild(productLink);
        productsContainer.appendChild(productDiv);
    });
}

function highlightSelectedCategory(category) {
    // remove 'selected' class from all items
    var items = document.querySelectorAll('.filter-item');
    items.forEach(function (item) {
        item.classList.remove('selected');
    });

    // add 'selected' class based on the category
    var selectedItem = document.getElementById(`${category}-link`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
}