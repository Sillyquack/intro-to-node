const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes.js");

app.use(express.json());

app.use("/user", userRouter);

app.listen(8080, () => {
  console.log("Server is running on port: 8080");
});
