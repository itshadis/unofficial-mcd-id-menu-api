const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const { loadMenu } = require("./menuModel");

const allMenu = loadMenu();

app.get('/', (req, res) => {
  res.send(allMenu)
});

app.get('/menu/:id', (req, res) => {
  const { id } = req.params;

  const foundMenu = allMenu.menu.find(menu => menu.id === Number(id));

  res.send(foundMenu);
});

app.get('/category/food', (req, res) => {
  const food = allMenu.menu.filter(menu => menu.category === "food");

  res.send(food);
});

app.get('/category/beverages', (req, res) => {
  const beverages = allMenu.menu.filter(menu => menu.category === "beverages");

  res.send(beverages);
});

app.get('/category/dessert', (req, res) => {
  const dessert = allMenu.menu.filter(menu => menu.category === "dessert");

  res.send(dessert);
});

app.get('/category/snack', (req, res) => {
  const snack = allMenu.menu.filter(menu => menu.category === "snack");

  res.send(snack);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
