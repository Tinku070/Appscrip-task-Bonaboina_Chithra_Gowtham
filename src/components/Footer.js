import React, { useState } from "react";
import "./Footer.css";
import gpay from "../assets/icons/img_Gpay.svg";
import mastercard from "../assets/icons/img_mastercard.svg";
import paypal from "../assets/icons/img_Paypal.svg";
import applepay from "../assets/icons/img_Apple_pay.svg";
import amex from "../assets/icons/img_American_express.svg";
import linkedin from "../assets/icons/img_mdi_linkedin.svg";
import insta from "../assets/icons/img_insta.svg";
import flag from "../assets/icons/img_india_flag.svg";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const toggle = (section) => setOpen(open === section ? null : section);

  return (
    <footer className="footer">
      {/* Top Subscribe Section */}
      <div className="footer-top">
        <div className="subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+91 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p className="currency">
            <img src={flag} alt="Flag" /> Rupee (INR)
          </p>
          <span className="note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </span>
        </div>
      </div>

      {/* Middle Links Section */}
      <div className="footer-links">
        <div className="footer-col">
          <h4 onClick={() => toggle("muse")}>mettā muse</h4>
          <ul className={open === "muse" ? "open" : ""}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 onClick={() => toggle("quick")}>QUICK LINKS</h4>
          <ul className={open === "quick" ? "open" : ""}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 onClick={() => toggle("follow")}>FOLLOW US</h4>
          <ul className={open === "follow" ? "open" : ""}>
            <div className="socials">
              <img src={insta} alt="Instagram" />
              <img src={linkedin} alt="LinkedIn" />
            </div>
          </ul>
        </div>
      </div>

      {/* Payment Logos Section */}
      <div className="footer-bottom">
        <h4>mettā muse ACCEPTS</h4>
        <div className="payments">
          <img src={gpay} alt="GPay" width="40" height="40"/>
          <img src={mastercard} alt="Mastercard" width="40" height="40"/>
          <img src={paypal} alt="Paypal" width="40" height="40"/>
          <img src={amex} alt="Amex" width="40" height="40" />
          <img src={applepay} alt="Apple Pay" width="40" height="40"/>
        </div>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
