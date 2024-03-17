// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err.message);
});

// Define routes
app.get('/api/data', (req, res) => {
  // Handle request logic here
  res.json({ message: 'Data from server' });
});

app.use(express.static('public'))

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
