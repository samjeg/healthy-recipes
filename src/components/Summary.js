import React from 'react';
import './styles/reset.css';
import './styles/summary.css';  
import Stars from './Stars2';  

const Summary = ({ stars }) => {
	return (
		<div>
	        <div class="attributes">
	            <h2>Summary</h2>
	            <label class="prep-time-label" for="prep-time">Prep time:</label>
	            <time class="prep-time" datetime="PT4H18M3S">25m</time>                
	            <label class="cooking-time-label" for="prep-time">Cooking time:</label>
	            <time class="cooking-time" datetime="PT4H18M3S">2h 30m</time>
	            <label class="ratings-label" for="ratings">Rating:</label> {/*Rating not in the correct position*/}
	            <Stars size={stars} />
	        </div>
        </div>
    );
}

export default Summary;