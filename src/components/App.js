import React, { Component } from 'react';
import SearchBar from '../containers/searchBar'; 

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
