import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = props => (
  <header className="main-navigation">
    <nav>
          <div to="/cart">{props.cartItemNumber}</div>
    </nav>
  </header>
);

export default MainNavigation;