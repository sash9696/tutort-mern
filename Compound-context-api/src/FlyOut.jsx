//create context

import { createContext, useContext, useState } from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const FlyOutContext = createContext();

export function FlyOut(props) {
  const [open, toggle] = useState(false);

  return (
    <div className="flyout">
      <FlyOutContext.Provider value={{ open, toggle }}>
        {props.children}
      </FlyOutContext.Provider>
    </div>
  );
}

function Toggle() {
  //pull the toggle state
  const { open, toggle } = useContext(FlyOutContext);
  return (
    <div className="flyout-btn" onClick={() => toggle(!open)}>
      <IconButton sx={{ background: "grey" }}>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}

function List({children}){
    const { open } = useContext(FlyOutContext);

    return open && <ul className="flyout-list">{children} </ul>

}

function Item({children}){

    return <li className="flyout-item">{children} </li>

}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
