import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageLink = ({ url, label }) => <Link to={url}>{label}</Link>;

PageLink.propTypes = {};

export default PageLink;
