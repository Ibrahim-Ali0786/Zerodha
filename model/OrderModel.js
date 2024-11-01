const {model} = require("mongoose");
const mongoose = require('mongoose');
const {OrderSchema} = require('../schema/OrderSchema');
const OrderModel =mongoose.model("order",OrderSchema);
module.exports = {OrderModel};