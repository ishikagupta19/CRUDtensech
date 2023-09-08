const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Sample pantry data store (you can replace this with a database)
const pantryStore = {};

// Create (POST) an item in the pantry
app.post('/add-item', (req, res) => {
  const { pantryId, basketKey, value } = req.body;
  if (!pantryId || !basketKey) {
    return res.status(400).json({ error: 'Pantry ID and basket key are required' });
  }

  if (!pantryStore[pantryId]) {
    pantryStore[pantryId] = {};
  }

  pantryStore[pantryId][basketKey] = value;
  return res.status(201).json({ message: 'Item added successfully' });
});

// Read (GET) an item from the pantry
app.get('/get-item', (req, res) => {
  const { pantryId, basketKey } = req.query;
  if (!pantryStore[pantryId] || !pantryStore[pantryId][basketKey]) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const value = pantryStore[pantryId][basketKey];
  return res.status(200).json({ value });
});

// List Baskets (GET) in the pantry
app.get('/list-baskets', (req, res) => {
  const { pantryId, filterName } = req.query;
  if (!pantryStore[pantryId]) {
    return res.status(404).json({ error: 'Pantry not found' });
  }

  const baskets = pantryStore[pantryId];
  if (filterName) {
    const filteredBaskets = Object.entries(baskets).reduce((result, [key, value]) => {
      if (key.includes(filterName)) {
        result[key] = value;
      }
      return result;
    }, {});
    return res.status(200).json(filteredBaskets);
  } else {
    return res.status(200).json(baskets);
  }
});

// Update (PUT) an item in the pantry
app.put('/update-item', (req, res) => {
  const { pantryId, basketKey, value } = req.body;
  if (!pantryStore[pantryId] || !pantryStore[pantryId][basketKey]) {
    return res.status(404).json({ error: 'Item not found' });
  }

  pantryStore[pantryId][basketKey] = value;
  return res.status(200).json({ message: 'Item updated successfully' });
});

// Delete (DELETE) an item from the pantry
app.delete('/delete-item', (req, res) => {
  const { pantryId, basketKey } = req.query;
  if (!pantryStore[pantryId] || !pantryStore[pantryId][basketKey]) {
    return res.status(404).json({ error: 'Item not found' });
  }

  delete pantryStore[pantryId][basketKey];
  return res.status(200).json({ message: 'Item deleted successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
