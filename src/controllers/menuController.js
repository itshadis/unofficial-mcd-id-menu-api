const { loadDB } = require('../models')

const db = loadDB();

const getAllMenu = (req, res) => {
  try {
    const allMenu = db.menu;
    
    res.status(200).send({
      message: 'data menu retrieved',
      status: 'ok',
      data: allMenu
    })
    
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const getDetailMenuById = (req, res) => {
  try {
    const { id } = req.params;
    const detailMenu = db.menu.find(menu => menu.id === Number(id));

    if(!detailMenu) {
      return res.status(404).send({
        message: 'menu not found'
      })
    }

    res.status(200).send({
      message: 'data menu retrieved',
      status: 'ok',
      data: detailMenu
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const getMenuCategoryFood = (req, res) => {
  try {
    const food = db.menu.filter(menu => menu.category === "food");
    
    res.status(200).send({
      message: 'data menu retrieved',
      status: 'ok',
      data: food
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const getMenuCategoryBeverages = (req, res) => {
  try {
    const beverages = db.menu.filter(menu => menu.category === "beverages");
    
    res.status(200).send({
      message: 'data menu retrieved',
      status: 'ok',
      data: beverages
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const getMenuCategoryDessert = (req, res) => {
  try {
    const dessert = db.menu.filter(menu => menu.category === "dessert");
    
    res.status(200).send({
      message: 'data menu retrieved',
      status: 'ok',
      data: dessert
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const getMenuCategorySnack = (req, res) => {
  try {
    const snack = db.menu.filter(menu => menu.category === "snack");
    
    res.status(200).send({
      message: 'data menu retrieved',
      status: 'ok',
      data: snack
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

module.exports = { 
  getAllMenu, 
  getDetailMenuById, 
  getMenuCategoryFood, 
  getMenuCategoryBeverages,
  getMenuCategoryDessert,
  getMenuCategorySnack
}