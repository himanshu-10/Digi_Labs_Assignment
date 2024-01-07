import React from "react";
import "./Footer.css";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoGameControllerSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      {/* <!-- FOOTER START --> */}
      <div className="All-Footer">
        <div className="footer">
          <div className="contain">
            <div className="col">
              <h1>Company</h1>
              <ul>
                <li>About us</li>
                <li>Pricing</li>
                <li>Contact us</li>
                <li>Features</li>
              </ul>
            </div>
            <div className="col">
              <h1>Product</h1>
              <ul>
                <li>Figma design system</li>
                <li>los kit</li>
                <li>Android kit</li>
                <li>Wireframe</li>
              </ul>
            </div>
            <div className="col">
              <h1>Resources</h1>
              <ul>
                <li>Templates</li>
                <li>Landing pages</li>
                <li>Documentation</li>
                <li>Comp library</li>
              </ul>
            </div>
            <div className="col">
              <h1>Legal</h1>
              <ul>
                <li>Privacy policy</li>
                <li>Terms & Conditions</li>
                <li>WHOIS lookup</li>
                <li>Disclaimer</li>
                <li>Affiliate programme</li>
              </ul>
            </div>
            <div className="col">
              <h1>Support</h1>
              <ul>
                <li>Help centre</li>
                <li>Raise ticket</li>
                <li>Report</li>
                <li>Refund</li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
        {/* boottom - point */}
        <div className="bottom-social-media">
          <ul className="bottom-social-media-ul">
            <li><p className="bottom-social-media-p"><IoLogoGithub/></p></li>
            <li><p className="bottom-social-media-p "><IoLogoLinkedin /></p></li>
            <li><p className="bottom-social-media-p "><IoGameControllerSharp/></p></li>
          </ul>
          <p className="bottom-social-media-copyright">© 2023 Mode UI Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
