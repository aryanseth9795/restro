import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import a from "../asset/logo/log.webp";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div>
        <img src={a} id="img" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Menu"> Menu </Link>
        <Link to="/Testimonials"> Testimonials</Link>
        <Link to="/Contact"> Contact </Link>
      </div>
    </div>
  );
}
export default Navbar;
