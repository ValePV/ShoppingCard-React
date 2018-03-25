import React, { Component } from 'react';

export default function Catalog(props){
	return(
		<div>
      {
			  props.data.map(cat => (
          <div class='cont-prod'>
            <img src={cat.imageURL}/>
            <h3>{cat.name}</h3>
            <h5>{cat.currency} {cat.price}</h5>
            <button class="btn btn-default" type="submit" onClick={() => this.addToCard()}> Add to Card </button>

          </div>



        ))
  		}
		
    </div>
		)
}