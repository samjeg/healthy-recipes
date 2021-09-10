import React from 'react';
import './styles/reset.css';
import './styles/recipes.css';

const Positives = ({ veg, vegan, healthy }) => {
    let veg_value = null;
    let vegan_value = null;
    let healthy_value = null;

    if(veg) {
		veg_value = <li key="veg">
                        <i className="fas fa-check"></i>
                        <p>Vegetarian</p>
                    </li>;
    }

    if(vegan) {
		vegan_value = <li key="vegan">
                        <i className="fas fa-check"></i>
                        <p>Vegan</p>
                      </li>;
    }

    if(healthy) {
		healthy_value = <li key="healthy">
                            <i className="fas fa-check"></i>
	                        <p>Healthy</p>
                        </li>;
    }

	return (
			<ul className="recipe-positives">
                {veg_value}
                {vegan_value}
                {healthy_value}
	        </ul>
	);
}

export default Positives; 