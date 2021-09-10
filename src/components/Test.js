import React  from 'react';
import './styles/reset.css';
import './styles/test.css';
import data from '../data/recipe_details.json';


const Test = () => {
        
    return (
        <div>
            <ul className="test-list">
                {data.map((item, i) => { 
                    return  (
                        <li className="test-list-item" key={i}>
                            <p className="title">
                                {item.title}  
                            </p>
                            <p className="summary">
                                {item.summary}  
                            </p>
                            <p className="prep-time">
                                {item.prep_time}  
                            </p>
                            <p className="cooking-time">
                                {item.cooking_time}  
                            </p>
                            <p className="image">
                                {item.image}  
                            </p>
                            <p className="rating">
                                {item.rating}  
                            </p>
                            <p className="ingredients">
                                {item.ingredients}  
                            </p>
                            <p className="steps">
                                {item.steps}  
                            </p>
                        </li>
                )})}
            </ul>
        </div>
    );
}

export default Test;