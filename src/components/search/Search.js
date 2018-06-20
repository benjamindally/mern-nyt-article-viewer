import React, { Component } from "react";
import API from "../../utils/API";

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
    if (this.state.title && this.state.author) {
      API.seach({
        topic: this.state.topic,
        start_year: this.state.start_year,
        end_year: this.state.end_year,
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
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
            placeholder="Topic"
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
            placeholder="Start Year"
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
            placeholder="End Year"
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleSearch}>
          Search
        </button>
      </form>
    );
  }
}
export default Search;
