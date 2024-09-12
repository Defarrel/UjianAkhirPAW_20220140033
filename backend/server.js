const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 1000, description: 'Powerful laptop' },
  { id: 2, name: 'Smartphone', price: 500, description: 'Latest smartphone' },
  { id: 3, name: 'Headphones', price: 100, description: 'Noise-cancelling headphones' },
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST a new product
app.post('/api/products', (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET a specific product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// PUT (update) a product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });

  const { name, price, description } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (description) product.description = description;

  res.json(product);
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});