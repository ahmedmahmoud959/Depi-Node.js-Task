# Task-9 for depi react web development track

# Product Management API

This is a simple Node.js and Express.js API for managing products in a store. The API uses MongoDB for the database and Mongoose for data modeling.

## Features

- Add new products
- Retrieve all products
- Get a product by ID
- Update a product
- Delete a product

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-management-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd product-management-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## MongoDB Setup

Make sure you have MongoDB installed and running on your machine. The API connects to a MongoDB instance running locally on the default port. You can change the connection string in `app.js` if needed.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5000`.

2. Use the following endpoints to interact with the API:

   - **Get all products:**
     ```http
     GET /api/products
     ```
   - **Get a product by ID:**
     ```http
     GET /api/products/:id
     ```
   - **Add a new product:**
     ```http
     POST /api/products
     ```
     Example request body:
     ```json
     {
       "proName": "Product Name",
       "brand": "Brand Name",
       "category": "Category Name",
       "quantity": 10,
       "price": 99.99,
       "discount": 10.0
     }
     ```
   - **Update a product:**
     ```http
     PUT /api/products/:id
     ```
     Example request body:
     ```json
     {
       "proName": "Updated Product Name",
       "brand": "Updated Brand Name",
       "category": "Updated Category Name",
       "quantity": 15,
       "price": 89.99,
       "discount": 5.0
     }
     ```
   - **Delete a product:**
     ```http
     DELETE /api/products/:id
     ```
