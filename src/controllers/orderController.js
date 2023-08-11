const { loadDB } = require('../models');
const { customAlphabet } = require('nanoid');
const fs = require('fs');
const path = require('path');

const db = loadDB();

const createOrder = (req, res) => {
  try {
    const nanoid = customAlphabet('1234567890abcdefghijABCDEFGHIJ', 16);
    const orderId = nanoid()
    const { menu } = req.body;

    if(!menu) {
      return res.status(400).send({
        message: 'order menu first please..'
      });
    }

    const prices = menu.map(data => data.price);
    const totalPrice = prices.reduce((a, b)=> a +b);

    db.order.push({
      orderId: orderId,
      menu: menu,
      totalPrice: totalPrice,
      paymentStatus: false
    })
    
    const jsonString = JSON.stringify(db);

    fs.writeFileSync(path.join(__dirname, '../models/db.json'), jsonString, 'utf-8', err => {
      if(err) throw err;
      console.log('order created')
    })

    const dataOrder = db.order.find(order => order.orderId === orderId)
    
    return res.status(201).send({
      message: 'order created',
      data: dataOrder
    })

  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error
    })
  }
}

const getAllOrder = (req, res) => {
  try {
    const allOrder = db.order;

    res.status(200).send({
      message: 'data order retrieved',
      status: 'ok',
      data: allOrder
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const getDetailOrder = (req, res) => {
  try {
    const { id } = req.params;
    const detailOrder = db.order.find(order => order.orderId === id);

    res.status(200).send({
      message: 'data order retrieved',
      status: 'ok',
      data: detailOrder
    })

  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

const paymentOrder = (req, res) => {
  try {
    const { id } = req.params;
    const detailOrder = db.order.find(order => order.orderId === id);

    if(!detailOrder) {
      return res.status(404).send({
        message: 'order not found'
      })
    }

    detailOrder.paymentStatus = true;

    const jsonString = JSON.stringify(db);

    fs.writeFileSync(path.join(__dirname, '../models/db.json'), jsonString, 'utf-8', err => {
      if(err) throw err;
      console.log('order created')
    })

    const dataOrder = db.order.find(order => order.orderId === id)

    res.status(200).send({
      message: 'payment success',
      status: 'ok',
      data: dataOrder
    })
  } catch (error) {
    return res.send({
      message: 'error occured',
      data: error.message
    })
  }
}

module.exports = { createOrder, getAllOrder, getDetailOrder, paymentOrder }