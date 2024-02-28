# REST API with Node

This is a simple API project built using Node.js, Express, and MongoDB. It provides basic CRUD operations for managing data in a MongoDB database.

## Prerequisites
Before running this project, ensure you have the following installed on your system:

- Node.js
- MongoDB (if you are running the server locally, else you can use the MongoDB cloud services)

## Installation
1. Clone the repository and navigate into the project directory

2. Install dependencies
```
npm install
```

3. Set up environment variables

Create a .env file in the root directory and provide the following variables; PORT and DATABASE_URL.

## Usage

To start the server run:
```
npm run serve
```

To start the server in development mode run:
```
npm run dev
```

## Endpoints

The following are the API endpoints available.

- GET `/api/products`: Get all products.  
- GET `/api/products/:id`: Get a product by ID.  
- POST `/api/products`: Create a new product. In the body of the request provide the "name", "quantity" and "price". "image" is optional.  
- PUT `/api/products/:id`: Update a product by ID.  
- DELETE `/api/products/:id`: Delete a product by ID.