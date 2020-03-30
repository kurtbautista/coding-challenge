import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import PageLink from "./PageLink";
import styles from "./CaseStudy.module.scss";

const ListItem = ({ imgUrl, url, title }) => {
  return (
    <div className="col col-md-6 col-sm-12 col-xs-12">
      <div className={styles.item}>
        <img
          data-testid="img"
          className={styles.thumbImg}
          src={imgUrl}
          alt={title}
        />
        <p data-testid="title">{title}</p>
        <Link to={url}>View Case Study</Link>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  url: PropTypes.string
};

ListItem.defaultProps = {
  title: "",
  imgUrl: "",
  url: ""
};

export default ListItem;
