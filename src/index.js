const cors = require('cors');
const express = require("express");
const port = process.env.PORT || 3001;

const menuRouter = require('./routes/menuRoute');
const orderRouter = require('./routes/orderRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: true, credentials:true}));

app.use('/api/menu', menuRouter);
app.use('/api/orders', orderRouter);


// app.get('/menu/:id', (req, res) => {
//   const { id } = req.params;

//   const foundMenu = db.menu.find(menu => menu.id === Number(id));

//   res.send(foundMenu);
// });

// app.get('/category/food', (req, res) => {
//   const food = db.menu.filter(menu => menu.category === "food");

//   res.send(food);
// });

// app.get('/category/beverages', (req, res) => {
//   const beverages = db.menu.filter(menu => menu.category === "beverages");

//   res.send(beverages);
// });

// app.get('/category/dessert', (req, res) => {
//   const dessert = db.menu.filter(menu => menu.category === "dessert");

//   res.send(dessert);
// });

// app.get('/category/snack', (req, res) => {
//   const snack = dsb.menu.filter(menu => menu.category === "snack");

//   res.send(snack);
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
