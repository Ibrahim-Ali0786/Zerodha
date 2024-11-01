// import { holdingSchema } from "../schema/HoldingSchema";
const {PositionSchema} = require('../schema/PostionSchema')
const mongoose = require('mongoose');
const position = mongoose.model('position',PositionSchema);
module.exports = {position};