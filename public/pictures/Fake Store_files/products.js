document.addEventListener('DOMContentLoaded', function () {
    const apiUrlProducts = 'https://fakestoreapi.com/products/';
    const apiUrlCategory = 'https://fakestoreapi.com/products/category/jewelery';

    // initial fetch of all products
    fetch(apiUrlProducts)
        .then(response => response.json())
        .then(products => {
            // Display top 4 products
            displayProducts(products.slice(0, 4), 'allproducts');
        })
        .catch(error => console.error('Error fetching all products:', error));

    // fetch jewelry category products
    fetch(apiUrlCategory)
        .then(response => response.json())
        .then(products => {
            // Display top 4 jewelry category products
            displayProducts(products.slice(0, 4), 'alljewelryproducts');
        })
        .catch(error => console.error('Error fetching jewelry products:', error));

    function displayProducts(products, containerId) {
        const appDiv = document.getElementById(containerId);

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            // create anchor tag around product
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
            appDiv.appendChild(productDiv);
        });
    }
});
