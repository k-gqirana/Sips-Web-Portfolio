import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../images/sips-removebg.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Siphelele Lolwana</h1>
        <h5 className="text-light">Technical Artisan</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="profile" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
