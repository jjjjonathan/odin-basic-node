const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const path = req.url;

    if (path === '/style.css') {
      fs.readFile('style.css', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        return res.end();
      });
    } else if (path === '/' || path === '/about' || path === '/contact-me') {
      const filename = path === '/' ? './index.html' : `.${req.url}.html`;
      fs.readFile(filename, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('404.html', (err, data) => {
        if (err) throw err;
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
