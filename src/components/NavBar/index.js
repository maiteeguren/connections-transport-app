import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`topnav ${open ? "responsive" : ""}`} id="myTopnav">
      <MenuIcon onClick={() => setOpen(!open)} />
      <ul onClick={() => setOpen(!open)}>
        <li>
          <Link to="/">My Connections</Link>
        </li>
        <li>
          <Link to="/new">New Connection</Link>
        </li>
      </ul>
    </nav>
  );
}
