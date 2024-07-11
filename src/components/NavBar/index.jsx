import React from "react";
import { NavLink } from "react-router-dom";
import { HomeRegular } from '@fluentui/react-icons';
import Carticon from '../Header/Carticon';

function Navbar() {
  return (
    <ul className="flex gap-5 text-slate-800 font-semibold">
      <li>
        <NavLink
          to={`/`}
          activeClassName="text-amber-400"
          className="flex items-center"
        >
          <HomeRegular className="mr-2 w-8 h-8" />
        </NavLink>
      </li>
      <li>
        <Carticon
          to={`/checkout`}
          activeClassName="text-amber-400"
          className="flex items-center"
        />
      </li>
    </ul>
  );
}

export default Navbar;
