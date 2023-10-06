const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === "/profile") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the profile page!");
  } else if (path === "/products") {
    if (
      query.search &&
      ["Milk", "Eggs", "Cheese", "Pork", "Shrimp", "Chicken"].includes(
        query.search
      )
    ) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`Product "${query.search}" found.`);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`Product "${query.search}" not found.`);
    }
  } else if (path === "/cart") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the cart page!");
  } else if (path === "/register") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the register page!");
  } else if (path === "/login") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is the login page!");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is listening");
});
