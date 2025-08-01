const express = require("express");

const port = 4002;
const app = express();
const users = [
  { id: 1, name: "Ali Hassan", score: 9.5 },
  { id: 2, name: "Noman Azam", score: 10 },
  { id: 3, name: "Joe", score: 8 },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userid = parseInt(req.params.id);
  const user = users.find((u) => u.id === userid);

  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found.",
    });
  }

  res.status(200).json({
    user,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
