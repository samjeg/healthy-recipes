import React from 'react';
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import Stars from './components/Stars2';
import Attributes from './components/Attributes';
import Summary from './components/Summary';
import Test from './components/Test';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
	        <RecipeDetail />
        </div>
    );  
}

export default App;
