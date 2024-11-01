const { Schema } = require('mongoose');
const moongose = require('mongoose');
const HoldingSchema = new Schema(
    {
        name:String,
        qty:Number,
        avg:Number,
        price:Number,
        net:String,
        day:String,
    }
)
module.exports = {HoldingSchema};