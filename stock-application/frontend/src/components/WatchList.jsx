import { watchlist } from "../data";
import DoughnutChart from "./DoughnutChart";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

  return (
    <li>
      <div className="item">
        <p className={isDown ? "down" : "up"}>{name}</p>
        <div className="itemInfo">
          <span className="percent">{percent}</span>
          {
            isDown ? (
                <KeyboardArrowDownIcon className='down'/>
            ) : (
                <KeyboardArrowUpIcon className='up' />
            )
          }
        </div>
      </div>
    </li>
  );
};
