import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import data from "../feed/data.json";
import styles from "./SinglePage.module.scss";

const Question = ({ number, question }) => (
  <React.Fragment>
    <h4 className={styles.question}>Question {number}</h4>
    <p>{question}</p>
  </React.Fragment>
);

const SinglePage = () => {
  const { id } = useParams();
  const details = data.filter(item => item.id === parseInt(id, 10))[0];
  const { image, title, questions } = details;
  const imgUrl = `${process.env.PUBLIC_URL}/assets/${image}`;
  const questionList = questions.map((item, index) => (
    <Question number={index} question={item} />
  ));

  return (
    <div className={styles.singlePageContainer}>
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <img className={styles.img} src={imgUrl} alt={title} />
          </div>
          <div className="col col-md-6">
            <h1 data-testid="title" className={styles.title}>
              {title}
            </h1>
            {questionList}
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePage.propTypes = {};

Question.propTypes = {
  number: PropTypes.number,
  question: PropTypes.string
};
Question.defaultProps = {
  number: null,
  question: ""
};

export default SinglePage;
