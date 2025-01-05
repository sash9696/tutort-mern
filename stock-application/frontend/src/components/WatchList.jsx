import { watchlist } from "../data";
import DoughnutChart from "./DoughnutChart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Grow, Tooltip } from "@mui/material";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useWindowContext } from "../contexts/WindowProvider";
const labels = watchlist.map((list) => list.name);

function WatchList() {
  console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
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
  };
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search like nifty"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock) => {
          return <WatchListItem key={stock.name} stock={stock} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const { isDown, name, percent } = stock;
  const [showWatchlistActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={isDown ? "down" : "up"}>{name}</p>
        <div className="itemInfo">
          <span className="percent">{percent}</span>
          {isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({uid}) => {

  const windowContext = useWindowContext();

  console.log('windowContext',windowContext)

  const handleBuyClick = () => {
    //open a modal
    windowContext.openBuyWindow(uid);

  };

  return (
    <span className="actions">
      <span style={{ display: "flex", alignItems: "center" }}>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="action">
            <BarChartOutlinedIcon className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
