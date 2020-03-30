import React from "react";

const Logo = () => (
  <a href="/">
    <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" />
  </a>
);

export default Logo;
