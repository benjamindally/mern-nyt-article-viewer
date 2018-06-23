import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    savedArticlesArray: [],
  };
  componentDidMount() {
    this.viewSaved();
  }

  viewSaved = () => {
    API.viewSaved()
      .then(response => this.setState({ savedArticlesArray: response.data }))
      .catch(err => console.log(err));
  };

  handleDeleteArticle = id => {
    API.deleteArticle(id)
      .then(response => console.log("deleted"))
      .catch(err => console.log(err));

    alert(`The article has been deleted`);

    window.location = "/saved";
  };
  render() {
    return (
      <div className="text-center">
        <div className="container-fluid  jumbotron header">
          <h1 className="display-4">NASS</h1>
          <p className="lead">Welcome to the NYT Article Searcher and Saver</p>
        </div>
        {this.state.savedArticlesArray.length < 1 && (
          <div className="article_box">
            <h3>There are no saved articles</h3>
          </div>
        )}
        {!this.state.deleted &&
          this.state.savedArticlesArray.map(article => (
            <div className="article_box">
              <h3 key={article._id} className="title">
                {article.title}
              </h3>
              <p>{article.snippet}</p>
              <a href={article.url}>Read More</a>
              <br />
              <button
                id={article._id}
                className="save_article btn btn-danger"
                onClick={() => this.handleDeleteArticle(article._id)}
              >
                Delete Article
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default Saved;
