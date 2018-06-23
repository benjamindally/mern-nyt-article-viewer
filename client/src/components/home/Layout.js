import React, { Component } from "react";
import Search from "../search/Search";
import Results from "../results/Results";
import "./layout.css";

class Layout extends Component {
  state = {
    results: [],
  };

  displayResults = response => {
    this.setState({ results: response });
  };

  noMatch = () => {
    alert("Please check your search terms. No results were found.");
    window.location = "/";
  };

  render() {
    return (
      <div className="text-center">
        <div className="container-fluid  jumbotron header">
          <h1 className="display-4">NASS</h1>
          <p className="lead">Welcome to the NYT Article Searcher and Saver</p>
        </div>

        {this.state.results < 1 && (
          <Search
            results={this.state.results}
            displayResults={this.displayResults}
            noMatch={this.noMatch}
          />
        )}
        {this.state.results.map(results => (
          <Results
            title={results.headline.main}
            snippet={results.snippet}
            url={results.web_url}
            saveArticle={this.saveArticle}
            key={results._id}
            id={results._id}
          />
        ))}
      </div>
    );
  }
}

export default Layout;
