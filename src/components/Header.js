import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="blend"></div>
      <div className="blend"></div>
      <img
        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
        alt="logo"
      />
      <div className="header__search">
        <input type="text" placeholder="Search for products, brands and more" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <Link to="/login">Login</Link>
      <h4>More</h4>
      <div className="header__right">
        <ShoppingCartIcon className="navbar__cartIcon" />
        <p>Cart</p>
      </div>
      <div className="navbar__searchHidden input__hidden">
        <SearchIcon className="navbar__hiddenSearchIcon" />
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="blend"></div>
    </header>
  );
}

export default Header;
