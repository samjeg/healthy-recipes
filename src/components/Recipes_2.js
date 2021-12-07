import React  from 'react';
import './styles/reset.css';
import './styles/recipes_2.css';
import data from '../data/recipe_items.json';
import Stars from './Stars';
import Positives from './Positives';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const Recipes = () => {
        
    return (
        <div>
            <section className="head-panel">
                <i className="fas fa-carrot"></i>
                <h1>healthy recipes</h1>
            </section>
            <section className="recipes-container">
                
            </section>
            <footer>  
                <p>By Samuel Jegede</p> 
            </footer>
        </div>
    );
}

export default Recipes;