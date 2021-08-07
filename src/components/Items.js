import React from 'react';
import './styles/reset.css';
import './styles/list.css';

const Items = ({ list, label_ }) => {
    let el = [];
    
    console.log("list size: " + list.length + " " + label_);
    for(let i=0; i<list.length; i++) {
        const next = list[i];
        console.log("next: " + next);
    	el.push(<li>{next}</li>);
    }

    return (
    	<div className="ls-container">
            <label className="label" for="list">{label_}:</label>
    	    <ul className="list">
                {el}   
            </ul>
        </div>
    );   
}

export default Items;