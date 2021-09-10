import React from 'react';
import './styles/reset.css';
import './styles/list2.css';


const Steps = ({ list }) => {
    let el = [];
    
    for(let i=0; i<list.length; i++) {
        const next = list[i];
    	el.push(<li>{next}</li>);
    }

    return (
    	<div className="container-steps">
            <label className="label-steps" for="steps">Steps:</label>
    	    <ul className="steps">
                {el}   
            </ul>
        </div>
    );   
}
export default Steps;