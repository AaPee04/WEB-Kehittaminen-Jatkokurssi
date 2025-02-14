const http = require('http');
const fs = require('fs');
const path = require('path');

// Määritä portti
const port = 3000;

// Luo palvelin
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, 'allTogether.html');
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // Jokin muu virhe
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('An error occurred on the server.');
      } else {
        // Onnistunut vastaus
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Muut pyynnöt
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Käynnistä palvelin
server.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://MACHINE-IP-ADDRESS:${port}`);
});