import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
// import { set } from "mongoose";
import SellActionWindow from "./SellActionWindow";
const GeneralContext = React.createContext({
  openBuyWindow: (uid,curr) => {},
  closeBuyWindow: () => {},
  openSaleWindow:(uid,curr,id,qty)=>{},
  closeSaleWindow:()=>{},
});
export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [price,setPrice] = useState(0)
  const [sellPrice,setSellPrice] = useState(0)
  const [StockId,setStockId] = useState('');
  const [qty,setQty] = useState(0);
  const handleOpenBuyWindow = (uid,curr) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setPrice(curr);
  };
  const handleSellWindow=(uid,curr,id,qty)=>{
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setSellPrice(curr);
    setStockId(id);
    setQty(qty)
  }
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setPrice(0);
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false)
    setSelectedStockUID("");
    setSellPrice(0);
    setStockId('')
    setQty(0)
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSaleWindow:handleSellWindow,
        closeSaleWindow:handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow curr={price}  uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow curr={sellPrice} uid={selectedStockUID} id={StockId} qty={qty} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
