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
            <section className="recipes-container">
                <section className="head-panel">
                    <i className="fas fa-carrot"></i>
                    <h1>healthy recipes</h1>
                </section>
                <h2 className="recipes-title">Recipes</h2>
                <Switch>
                  <Route exact path="/">
                        <ul className="recipes">
                            {data.map((item, i) => { 
                                return  (
                                    <Link to={`/${item.title}`}>
                                        <li className="recipe-item" key={i}>
                                            <div className="rcp-img-container">
                                                <img className="rcp-img" alt="no image available" src={item.image} />
                                            </div>
                                            <div className="rcp-health-score-container"> 
                                                <p className="name">{item.title}</p>
                                                <Stars size={item.rating}/>
                                            </div>
                                            <Positives veg={item.vegetarian} vegan={item.vegan} healthy={item.healthy}/>  
                                        </li>
                                    </Link>
                            )})}
                        </ul>
                  </Route> 
                </Switch>
                <footer>  
                    <p>by Samuel Jegede </p> 
                </footer>
            </section>
        </div>
    );
}

export default Recipes;