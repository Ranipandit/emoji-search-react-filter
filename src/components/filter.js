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
      	<h1>Search Engine</h1>
        <form>
      		<div className="form-group">
		        <input type="text" placeholder="filter the items" 
		        onChange={this.handleChange} className="form-control input" />
        	</div>
        </form>
               
	        {SearchFilter.map(function(items, index){
	  	 	return <div key={index}>
	  	 			<p className="form-control items">{items.title}{items.symbol}</p>
	  	 		   </div>
	  	 	})}
      </div>
    );
  }
}

export default Filter;
