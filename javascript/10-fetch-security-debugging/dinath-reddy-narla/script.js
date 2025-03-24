const API_URL = 'https://dummyjson.com/products';

// Function to fetch data from API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    alert('Error fetching data!');
  }
}

// Function to get all products
async function fetchAllProducts() {
  const data = await fetchData(API_URL);
  return data.products;
}

// Function to search products
async function searchProductsByQuery(query) {
  const url = `${API_URL}/search?q=${encodeURIComponent(query)}`;
  const data = await fetchData(url);
  return data.products;
}

// Function to get product details by ID
async function fetchProductDetails(id) {
  const product = await fetchData(`${API_URL}/${id}`);
  return product;
}

// Display all products
async function displayAllProducts() {
  const products = await fetchAllProducts();
  const content = document.getElementById('productContent');
  content.innerHTML = products.map(product => `
    <div class="product-item">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <button onclick="displayProductDetails(${product.id})">View Details</button>
    </div>
  `).join('');
}

// Display search results
async function displaySearchResults(query) {
  const products = await searchProductsByQuery(query);
  const content = document.getElementById('productContent');
  content.innerHTML = products.length > 0 ? products.map(product => `
    <div class="product-item">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <button onclick="displayProductDetails(${product.id})">View Details</button>
    </div>
  `).join('') : '<p>No products found.</p>';
}

// Display product details
async function displayProductDetails(productId) {
  const product = await fetchProductDetails(productId);
  const content = document.getElementById('productContent');
  content.innerHTML = `
    <div class="product-details">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <img src="${product.thumbnail}" alt="${product.title}" style="width: 100%; max-width: 300px;">
      <p><strong>Price:</strong> $${product.price}</p>
      <button class="back-btn" onclick="displayAllProducts()">Back to Products</button>
    </div>
  `;
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
