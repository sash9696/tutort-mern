import React, { useState } from "react";
import './BuyActionWindow.css'
import { useWindowContext } from "../contexts/WindowProvider";
function BuyActionWindow() {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

const windowContext = useWindowContext();
  const handleBuyClick = () => {
    //api call to buy

    alert('Buy successful')
    //close the window
    windowContext.closeBuyWindow();

  }

  const handleCancelClick = () => {

    windowContext.closeBuyWindow();
  }


  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step={0.05}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required $140.65</span>
        <div>
            <a className="btn btn-blue" 
                onClick={handleBuyClick}
            >
                Buy
            </a>
            <a className="btn btn-grey"
                            onClick={handleCancelClick}

            >
                Cancel
            </a>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
