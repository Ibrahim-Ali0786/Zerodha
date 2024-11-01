import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { watchlist } from "../data/data";
const Orders = () => {
  let [order,setOrder] = useState([]);
  useEffect(()=>{
    axios.get('https://zerodha-pq9f.onrender.com/allOrder').then((res)=>{
      setOrder(res.data);
    })
  },[]);
  if(order.length<=0)
  {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        hello
        <Link to={"/dashboard"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}
else
{
  return (
    <>
      <h3 className="title">order({order.length})</h3>

<div className="order-table">
  <table>
    <tr>
      <th>Name</th>
      <th>Qty.</th>
      <th>Curr Price</th>
    </tr>
      {order.map((stock,index)=>{
        return(
          <tr key={index}>
          <td>{stock.name}</td>
          <td>{stock.qty}</td>
          <td>{stock.price}</td>
          </tr>
        )
      })}
    </table>
    </div>
    </>
  ) 
}
};
export default Orders;
