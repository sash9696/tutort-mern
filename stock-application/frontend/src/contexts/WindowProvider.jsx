import { createContext, useContext, useState } from "react";
import BuyActionWindow from "../components/BuyActionWindow";

//create a context

const initialState = {
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
};

const WindowContext = createContext(initialState);

//use provider to provide the data

export const WindowContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  console.log('props.children',props.children)
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <WindowContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
        {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid ={selectedStockUID} />}
    </WindowContext.Provider>
  );
};

//use consumer or use context hook to consume data

export const useWindowContext = () => useContext(WindowContext);
