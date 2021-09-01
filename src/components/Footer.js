import React from "react";
import "./Footer.css";
import WorkIcon from "@material-ui/icons/Work";
import StarsIcon from "@material-ui/icons/Stars";
import RedeemIcon from "@material-ui/icons/Redeem";
import HelpIcon from "@material-ui/icons/Help";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__content">
          <p className="footer__title">ABOUT</p>
          <p className="footer__text">Contact Us</p>
          <p className="footer__text">About Us</p>
          <p className="footer__text">Careers</p>
          <p className="footer__text">Flipkart Stories</p>
          <p className="footer__text">Press</p>
          <p className="footer__text">Flipkart Wholesale</p>
          <p className="footer__text">Corporate Information</p>
        </div>
        <div className="footer__content">
          <p className="footer__title">HELP</p>
          <p className="footer__text">Payments</p>
          <p className="footer__text">Shipping</p>
          <p className="footer__text">Cancellation & Returns</p>
          <p className="footer__text">FAQ</p>
          <p className="footer__text">Report Infringement</p>
        </div>
        <div className="footer__content">
          <p className="footer__title">POLICY</p>
          <p className="footer__text">Return Policy</p>
          <p className="footer__text">Terms Of Use</p>
          <p className="footer__text">Security</p>
          <p className="footer__text">Privacy</p>
          <p className="footer__text">Sitemap</p>
          <p className="footer__text">EPR Compliance</p>
        </div>
        <div className="footer__content">
          <p className="footer__title">SOCIAL</p>
          <p className="footer__text">Facebook</p>
          <p className="footer__text">Twitter</p>
          <p className="footer__text">YouTube</p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__content">
          <WorkIcon className="footer__icon" />
          <p className="bottom__text">Sell On Flipkart</p>
        </div>
        <div className="bottom__content">
          <StarsIcon className="footer__icon" />
          <p className="bottom__text">Advertise</p>
        </div>
        <div className="bottom__content">
          <RedeemIcon className="footer__icon" />
          <p className="bottom__text">Gift Cards</p>
        </div>
        <div className="bottom__content">
          <HelpIcon className="footer__icon" />
          <p className="bottom__text">Help Center</p>
        </div>
        <div className="bottom__content">
          <p className="bottom__text">© 2007-2021 Flipkart.com</p>
        </div>
        <div className="bottom__content">
          <img
            className="footer__paymentImg"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
            alt="payment"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
