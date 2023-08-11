const express = require('express');
const { getAllOrder, createOrder, paymentOrder, getDetailOrder } = require('../controllers/orderController');


const router = express.Router();

router.get('/', getAllOrder);
router.get('/:id', getDetailOrder)
router.post('/create', createOrder)
router.put('/payment/:id', paymentOrder);

module.exports = router;