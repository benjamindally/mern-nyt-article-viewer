import React from "react";
import "./results.css";

const Results = props => (
  <div className="article_box">
    <h3 className="title">{props.title}</h3>
    <p>{props.snippet}</p>
    <a href={props.url}>Read More</a>
    <br />
    <button
      className="save_article btn btn-primary"
      onClick={props.saveArticle}
    >
      Save Article
    </button>
  </div>
);

export default Results;
