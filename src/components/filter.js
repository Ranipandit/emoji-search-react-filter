import React, { Component } from 'react';
import Data from './emojiList.json';


class Filter extends Component {
	constructor () {
		super ();

		this.state = {
			search : ''	
		}
	}

	handleChange = (event) => {
		this.setState ({
			search : event.target.value
		});
	}
  render() {
  	
  	const {search} = this.state;

  	const SearchFilter = Data.filter( item => {
  		if (item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  			return true
  		if (item.keywords.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  			return true
  		return false
  	})
  	
    return (
      <div>
        <header>
          <input type="text" placeholder="filter the items" 
          onChange={this.handleChange} />

        </header>
	        {SearchFilter.map(function(items, index){
	  	 	return <div key={index}>
	  	 			<p>{items.title}{items.symbol}</p>
	  	 		   </div>
	  	 	})}
      </div>
    );
  }
}

export default Filter;
