const { Router } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(userDB);
});

router.post("/login", (req, res) => {
  userDB.push(req.body);
  res.sendStatus(201);
});

router.post("/register", (req, res) => {
  userDB.push(req.body);
  res.sendStatus(201);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body;
  userDB[id] = user;
  res.sendStatus(204);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  userDB.splice(id, 1);
  res.sendStatus(204);
});

module.exports = router;
