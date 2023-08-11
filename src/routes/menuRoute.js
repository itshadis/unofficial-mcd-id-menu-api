const express = require('express');

const { 
  getAllMenu, 
  getDetailMenuById, 
  getMenuCategoryFood,
  getMenuCategoryBeverages, 
  getMenuCategoryDessert, 
  getMenuCategorySnack
} = require('../controllers/menuController')

const router = express.Router();

router.get('/', getAllMenu);
router.get('/detail/:id', getDetailMenuById);
router.get('/category/food', getMenuCategoryFood);
router.get('/category/beverages', getMenuCategoryBeverages);
router.get('/category/dessert', getMenuCategoryDessert);
router.get('/category/snack', getMenuCategorySnack);

module.exports = router;