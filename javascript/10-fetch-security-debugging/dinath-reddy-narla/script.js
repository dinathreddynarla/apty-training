//Base API URL
const API_URL = 'https://dummyjson.com/products';

// Function to fetch data from API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    alert('Error fetching data! Please try again later.');
    return null;  // Return null so that all further actions can be prevented , if there is not data
  }
}

// Function to get all products
async function fetchAllProducts() {
  const data = await fetchData(API_URL);
  if (data) {
    return data.products;
  }
  return []; // Return an empty array if fetching fails
}

// Function to search products
async function searchProductsByQuery(query) {
  const url = `${API_URL}/search?q=${encodeURIComponent(query)}`;
  const data = await fetchData(url);
  if (data) {
    return data.products;
  }
  return []; // Return an empty array if fetching fails
}

// Function to get product details by ID
async function fetchProductDetails(id) {
  const product = await fetchData(`${API_URL}/${id}`);
  return product; // Could be null if fetching fails
}

// Display all products
async function displayAllProducts() {
  const products = await fetchAllProducts();
  const content = document.getElementById('productContent');
  if (products.length > 0) {
    content.innerHTML = products.map(product => `
      <div class="product-item">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button onclick="displayProductDetails(${product.id})">View Details</button>
      </div>
    `).join('');
  } else {
    content.innerHTML = '<p>Sorry, there are no products available at the moment.</p>';
  }
}

// Display search results
async function displaySearchResults(query) {
  const products = await searchProductsByQuery(query);
  const content = document.getElementById('productContent');
  if (products.length > 0) {
    content.innerHTML = products.map(product => `
      <div class="product-item">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button onclick="displayProductDetails(${product.id})">View Details</button>
      </div>
    `).join('');
  } else {
    content.innerHTML = '<p>No products found. Please try a different search.</p>';
  }
}

// Display product details
async function displayProductDetails(productId) {
  const product = await fetchProductDetails(productId);
  const content = document.getElementById('productContent');
  if (product) {
    content.innerHTML = `
      <div class="product-details">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <img src="${product.thumbnail}" alt="${product.title}" style="width: 100%; max-width: 300px;">
        <p><strong>Price:</strong> $${product.price}</p>
        <button class="back-btn" onclick="displayAllProducts()">Back to Products</button>
      </div>
    `;
  } else {
    content.innerHTML = '<p>Sorry, we could not fetch the product details. Please try again later.</p>';
  }
}

// Handle the search action
function searchProducts() {
  const query = document.getElementById('searchTerm').value;
  if (query.trim()) {
    displaySearchResults(query);
  } else {
    alert('Please enter a search query!');
  }
}

// Initialize by displaying all products
document.addEventListener('DOMContentLoaded', displayAllProducts);
