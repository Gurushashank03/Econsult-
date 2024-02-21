const {Schema, model} = require("mongoose");

  
const Payment = model('Payment', paymentSchema, 'payment');

module.exports = Payment