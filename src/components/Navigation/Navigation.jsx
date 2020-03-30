import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.scss";

const Navigation = props => {
  const { menu } = props;

  const navigation = menu.map(item => (
    <li>
      <a href={item.url}>{item.label}</a>
    </li>
  ));
  return (
    <nav className={styles.navigationContainer}>
      {menu && <ul>{navigation}</ul>}
    </nav>
  );
};

Navigation.propTypes = {
  menu: PropTypes.arrayOf({
    label: PropTypes.string,
    url: PropTypes.string
  })
};

Navigation.defaultProps = {
  menu: []
};

export default Navigation;
