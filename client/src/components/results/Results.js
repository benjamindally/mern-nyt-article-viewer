import React, { Component } from "react";
import "./results.css";
import API from "../../utils/API";

class Results extends Component {
  state = {
    saved: false,
  };
  handleSaveArticle = event => {
    event.preventDefault();

    let newArticle = {
      title: this.props.title,
      snippet: this.props.snippet,
      url: this.props.url,
      id: this.props.id,
    };

    this.setState({ saved: true });

    API.saveArticle(newArticle)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    alert(`"${this.props.title}" has been saved`);
  };

  render() {
    return (
      <div>
        {!this.state.saved && (
          <div className="article_box">
            <h3 className="title">{this.props.title}</h3>
            <p>{this.props.snippet}</p>
            <a href={this.props.url}>Read More</a>
            <br />
            <button
              className="save_article btn btn-secondary"
              onClick={this.handleSaveArticle}
            >
              Save Article
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Results;
