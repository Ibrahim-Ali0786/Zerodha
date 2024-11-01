// import { holdingSchema } from "../schema/HoldingSchema";
const { HoldingSchema } = require('../schema/HoldingSchema');
const mongoose = require('mongoose');
const holding = mongoose.model('holding',HoldingSchema);
module.exports = {holding};