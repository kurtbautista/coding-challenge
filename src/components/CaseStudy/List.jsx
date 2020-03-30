import React from "react";
import ListItem from "./ListItem";
import data from "../../feed/data.json";
import styles from "./CaseStudy.module.scss";

const List = () => {
  const caseStudy = data.map(item => {
    const { title_long: title, thumb, id } = item;
    const imgUrl = `${process.env.PUBLIC_URL}/assets/${thumb}`;
    const url = `/${id}`;
    return <ListItem title={title} url={url} imgUrl={imgUrl} />;
  });
  return (
    <div className={styles.caseStudyContainer}>
      <div className="container">
        <div className="row">{caseStudy}</div>
      </div>
    </div>
  );
};

List.propTypes = {};

List.defaultProps = {};

export default List;
