import React from 'react';
import './styles/reset.css';
import './styles/list.css';


const Ingredients = ({ list }) => {
    let el = [];
    
    for(let i=0; i<list.length; i++) {
        const next = list[i];
    	el.push(<li>{next}</li>);
    }

    return (
    	<div className="container-ingr">
            <label className="label-ingr" for="ingredients">Ingredients:</label>
    	    <ul className="ingredients">
                {el}   
            </ul>
        </div>
    );   
}
export default Ingredients;