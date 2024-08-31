const express = require("express");

const app = express();

const port = 3000;

//middleware to parse json bodies

app.use(express.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];



//CRUD
//create => post
//read => get
//update => put or patch
//delete => delete

//curl -X GET http://localhost:3000/items
//curl -X GET http://localhost:3000/items/2
// curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"chaitanya"}'
// curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name":"Updated Item"}'
//curl -X DELETE http://localhost:3000/items/2

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({
      error: "Item not found",
    });
  }
  res.json(item);
});

app.post("/items", (req, res) => {
  console.log("body", req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }

  const newItem = { id: items.length + 1, name };

  items.push(newItem);

  res.status(201).json(newItem);
});

//update an existing record

app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name } = req.body;

  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      error: "Item not found",
    });
  }
  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }
  items[itemIndex].name = name;
  res.json(items[itemIndex]);
});

app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex((i) => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({
      error: "Item not found",
    });
  }

  items.splice(itemIndex, 1);
  res.json(items[itemIndex]);
});

app.listen(port, () => {
  console.log(`Server is running on Port = ${port}`);
});
