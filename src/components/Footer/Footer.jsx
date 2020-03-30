import React from "react";
import Navigation from "../Navigation";
import styles from "./Footer.module.scss";
import Logo from "../Logo";

const Footer = () => {
  const menu = [
    { label: "Privacy", url: "/" },
    { label: "Sitemap", url: "/" },
    { label: "Facebook", url: "/" },
    { label: "LinkIn", url: "/" },
    { label: "Instagram", url: "/" },
    { label: "Twitter", url: "/" }
  ];
  return (
    <div className={styles.footerContainer}>
      <div className="container">
        <div className="row">
          <div className="col col-md-4">
            <Logo />
          </div>
          <div className="col col-md-8">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
