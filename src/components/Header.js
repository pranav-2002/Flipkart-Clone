import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../fire";
import { useEffect, useState } from "react";

function Header() {
  const [user, setUser] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
    return unsubscribe;
  }, []);

  const signOut = () => {
    auth.signOut();
    history.push("/login");
  };

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
      {user && (
        <button onClick={signOut} className="header__logout">
          Logout
        </button>
      )}
      {user && user && <p className="header__account">My Account</p>}
      {!user && <Link to="/login">Login</Link>}
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
