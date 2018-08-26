import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import axios from 'axios';


class SearchHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    }

  }
  

  

  getInfo =(e) => {
    e.preventDefault();

    const searchInput = e.target.elements.search.value;
    axios.get(`https://www.reddit.com/r/php/search.json?q=${searchInput}`)
      .then((res) => {
        this.setState({
          searchResults: res.data.data.children
        })
    });
  }


  render() {
    let {searchResults} = this.state;
    
    return (
      <div className="App">
       
        <br/> <br/>
        <Search getInfo = {this.getInfo} />
        <br/> <br/><br/><br/>
         <Result searchResults = {searchResults} />
                   
      </div>
    );
  }
}

export default SearchHome;