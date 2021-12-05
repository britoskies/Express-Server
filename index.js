const express = require("express");
const app = express();
const port = 3000; 
const service = require('./src/service');
const usersData = service.getUsers()

// Recognize the incoming request Object as a JSON object

app.use(express.json()); 

// Get server data

app.get("/", (req, res) => {  
  res.json({
    Header: "Users Data",
    Body: usersData
  });
});

// Create new data

app.post("/", (req,res) => {
  let { body: newUser } = req;
  let user = service.createUser(newUser);
  res.status(201).json({
    message: "New user was created",
    body: user
  });
});

// Server running

app.listen(port, () => {
  console.log(`Servidor abierto en http://localhost:${port}`);
});
