import React  from 'react';
import './styles/reset.css';
import './styles/attributes.css';

const Attributes = ({ healthy, vegetarian, vegan }) => {
	 const attributes_ = []

    if (healthy) {
    	attributes_.push(
	        <li>
		        <p>healthy:</p>
                <i className="fas fa-heartbeat"></i>
            </li>
    	);
     };

    if (vegetarian) {
	    attributes_.push(
	        <li>
		        <p>vegetarian:</p>
                <i className="fas fa-leaf"></i>
            </li>
    	); 
    };

    if (vegan) {
	    attributes_.push(
	        <li>
		        <p>vegan:</p>
                <i className="fas fa-seedling"></i>
            </li>
    	); 
    };

    return (
    	<div className="container">
		    <ul className="attributes-2">
	            {attributes_}   
	        </ul>
        </div>
    );   
}

export default Attributes;