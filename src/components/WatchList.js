import React ,{useContext, useState} from "react";
import {Tooltip,Grow} from '@mui/material';
import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import { DonutChart } from "./DonutChart";
const labels = watchlist.map((stock)=>stock['name']);
const WatchList = () => {
  const data={
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock,index)=>{
         return(
          <WatchListItem  stock={stock} key={index} />
         )
        })}
      </ul>
      <DonutChart data={data}/>
    </div>
  );
};

export default WatchList;
const WatchListItem = ({stock})=>{
  const [showWatchlistActions,setShowWatchlistActions] = useState(false);
  const handleMouseEnter = (e)=>{
    setShowWatchlistActions(true)
  }
  const handleMouseExit = (e)=>{
    setShowWatchlistActions(false)
  }
  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
    <div className="item">
      <p className={stock.isDown ? 'down':'up'}>{stock.name}</p>
      <div className="item-info">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className='down' />
        ):<KeyboardArrowUp className='up' /> }
        <span className="price">{stock.price}</span>
      </div>
    </div>
    {showWatchlistActions && <WatchListActions curr={stock.price} uid={stock.name} />}
    </li>
  )
}
const WatchListActions = ({uid,curr,stock})=>{
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid,curr);
  };
    const handleSellClick= async()=>{
      let response = await axios.get('https://zerodha-pq9f.onrender.com/allOrder');
      let data = response.data;
      let order = data.filter((data)=> data.name===uid);
      if(order && order.length>0)
      {
        let id = order[0]._id;
        let qty = order[0].qty;
        generalContext.openSaleWindow(uid,curr,id,qty);
      }
      else
      {
        alert('you have zero stock in that')
      }
    }

  return(
    <span className="actions">
    <span>
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button onClick={handleBuyClick} className="buy">buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button onClick={handleSellClick} className="sell">sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
      <button className="action"><BarChartOutlined className="icon"/></button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
      <button className="action"><MoreHoriz className="icon"/></button>
      </Tooltip>
      </span>
    </span>
  )
}