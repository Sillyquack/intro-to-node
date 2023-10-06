const express = require("express");
const server = express();
server.use(express.json());

const fruits = [];

server.get("/fruits", (req, res) => {
  res.json(fruits);
});

server.get("/fruits/:id", (req, res) => {
  for (let fruit of fruits) {
    console.log(req.params.id);
    if (fruit.id == req.params.id) {
      res.status(200);
      return res.send(fruit);
    }
  }
  res.status(404);
  res.send("Fruit not found");
});

server.post("/fruits", function (req, res) {
  if (fruits.length > 0 && fruits.some((f) => f.name === req.body.name)) {
    res.status(409);
    return res.send("Fruit already exists");
  }
  let index = 1;
  if (fruits.length > 0) {
    index = fruits[fruits.length - 1].id + 1;
  }

  const newFruit = {
    id: index,
    name: req.body.name,
  };
  fruits.push(newFruit);
  res.json(newFruit);
});

server.put("/fruits/:id", function (req, res) {
  for (let fruit of fruits) {
    if (fruit.id == req.params.id) {
      fruit.name = req.body.name;
      res.status(200);
      return res.send("Update successful");
    }
  }
  res.status(404);
  res.send("Fruit not found");
});

server.delete("/fruits/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id); // Convert id to an integer
  const index = fruits.findIndex((fruit) => fruit.id === idToDelete);

  if (index !== -1) {
    // Check if the fruit with the specified id exists
    fruits.splice(index, 1); // Remove the fruit from the array
    res.status(204).send(); // Send a "No Content" response indicating success
  } else {
    res.status(404).send("Fruit not found");
  }
});

server.listen(8080, () => {
  console.log(`Server listening`);
});
