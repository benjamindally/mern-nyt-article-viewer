import React, { Component } from "react";
// import API from "../../utils/API";
import axios from "axios";

const authKey = "b48147a61dbd452f8c9a968d17b2b866";
const queryURLBase =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
class Search extends Component {
  state = {
    topic: "",
    start_year: "",
    end_year: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.start_year && this.state.end_year) {
      axios
        .get(
          queryURLBase +
            "&q=" +
            this.state.topic +
            "&begin_date=" +
            this.state.start_year +
            "0101" +
            "&end_date=" +
            this.state.end_year +
            "0101"
        )
        .then(response => {
          if (response.data.response.docs.length < 1) {
            this.props.noMatch();
            return;
          }
          this.props.displayResults(response.data.response.docs);
        });
    }
  };

  render() {
    return (
      <form className="container">
        <h1>Search for Articles</h1>
        <div className="form-group">
          <label>Topic</label>
          <input
            value={this.state.topic}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            name="topic"
          />
        </div>
        <div className="form-group">
          <label>Start Year</label>
          <input
            value={this.state.start_year}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            name="start_year"
          />
        </div>
        <div className="form-group">
          <label>End Year</label>
          <input
            value={this.state.end_year}
            onChange={this.handleInputChange}
            type="text"
            className="form-control"
            name="end_year"
          />
        </div>
        <button className="btn btn-secondary" onClick={this.handleFormSubmit}>
          Search
        </button>
      </form>
    );
  }
}
export default Search;
