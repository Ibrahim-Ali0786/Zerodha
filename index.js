require('dotenv').config();
const express = require('express')
const app = express()
const uri = process.env.MONGO_URL;
const port = process.env.port || 8080;
const cors = require('cors');
const authRoute = require("./Routes/AuthRoute.js");
const bodyParser = require('body-parser');
const {holding} = require("./model/holdingModel.js");
const {position} = require('./model/PositionModel.js');
const {OrderModel} = require("./model/OrderModel.js");
const { default: mongoose } = require('mongoose');
const cookieParser = require("cookie-parser");
// const { default: Orders } = require('../dashboard/src/components/Orders.js');
app.use(cors({
  origin: ["https://frontend.d1dk8zlerjmfx7.amplifyapp.com","https://dashboard.d3bnl1cz0kxf11.amplifyapp.com","https://your-backend-url.com"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  domain: "dashboard.d3bnl1cz0kxf11.amplifyapp.com",
  allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.json());
app.get('/allHoldings',async(req,res)=>{
  let allHoldings = await holding.find({});
  res.json(allHoldings);
});
app.get('/allPosition',async(req,res)=>{
  let allPosition = await position.find({});
  res.json(allPosition);
});
app.get('/allOrder',async(req,res)=>{
  let order = await OrderModel.find({});
  res.json(order);
})
app.post("/newOrder",async(req,res)=>{
 let newOrder = new OrderModel({
  name:req.body.name,
  qty:req.body.qty,
  price:req.body.price,
  mode:req.body.mode,
  curr:req.body.curr,
 })
 await newOrder.save();
 res.send('saved');
})
app.delete("/delete/:id",async(req,res)=>{
  let {id} = req.params;
  await OrderModel.findByIdAndDelete(id);
})

app.use('/',authRoute);
mongoose.connect(uri,{
})
.then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));
app.listen(port,()=>{
  console.log('listing on port',port);

})