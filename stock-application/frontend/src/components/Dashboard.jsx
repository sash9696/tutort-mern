import { WindowContextProvider } from "../contexts/WindowProvider";
import Apps from "../pages/Apps";
import Funds from "../pages/Funds";
import Holdings from "../pages/Holdings";
import Orders from "../pages/Orders";
import Positions from "../pages/Positions";
import Summary from "../pages/Summary";
import WatchList from "./WatchList";
import {Routes,Route} from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <WindowContextProvider>
        <WatchList />
      </WindowContextProvider>

      <div className="content">
        <Routes>
          <Route exact path='/' element = {<Summary/>} />
          <Route exact path='/orders' element = {<Orders/>} />
          <Route exact path='/holdings' element = {<Holdings/>} />
          <Route exact path='/positions' element = {<Positions/>} />
          <Route exact path='/funds' element = {<Funds/>} />
          <Route exact path='/apps' element = {<Apps/>} />






        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
