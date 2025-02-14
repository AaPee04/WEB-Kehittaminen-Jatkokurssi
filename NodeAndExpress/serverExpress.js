// Import the express module
const express = require('express');
const path = require("path");

// Create an instance of an Express application
const app = express();

app.use(express.static(path.join(__dirname)));

// Define a port number
const port = 3000;

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://MACHINE-IP-ADDRESS:${port}`);
});