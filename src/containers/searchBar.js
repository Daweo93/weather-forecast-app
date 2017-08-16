import React, { Component } from 'react'; 

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(this);
    this.setState( {term: event.target.value });
  }

  render() {
    return (
      <form className="col-sm-12 mt-3">
        <div className="input-group">
          <input
            className="form-control" 
            placeholder="Search weather for..." 
            onChange={this.onInputChange}
            value={this.state.term}
            />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Go!</button>
          </span>
        </div>
      </form>
    );
  }
}