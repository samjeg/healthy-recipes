import React from 'react';
import './styles/reset.css';
import './styles/stars.css';

const Stars = ({ size }) => {
    let ratings = [];

    for(let i=0; i<size; i++) {
    	ratings.push(<i className="fas fa-star" key={i}></i>);
    }

    return (
	    <ul className="health-score">
            {ratings}   
        </ul>
    );   
}

export default Stars;