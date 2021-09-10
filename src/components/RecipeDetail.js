import React  from 'react';
import './styles/reset.css';
import './styles/detail.css';
import '../data/recipe_details.json';
import Items from './Items';
import Stars from './Stars2';
import Attributes from './Attributes';
import Summary from './Summary';
import Ingredients from './Ingredients';
import Steps from './Steps';
import image from '../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';


const RecipeDetail = () => {
    const steps = ["1/2 cup unsalted chicken broth", "2 teaspoons cornstarch",
                   "1 teaspoon lemon or lime juice", "1 teaspoon grated lemon or lime peel",
                   "1 tablespoon chopped parsley", "1 tablespoon sugar"];

    const ingr = ["Cornstarch", "Limepeel", "Parsley", "Sugar", "Lime Juice", "Chicken Broth"];
    

	return (  
        <div>      
		<section className="head-panel">
            <i className="fas fa-carrot"></i>
            <h1>healthy recipes</h1>
        </section>
        <article>
            <Summary stars={5} />
            <hr />
            
            <div className="container">
                <img className="img" alt="no image" src={image} align="Top"/> {/*Image not renderring*/}
                <p className="summary">Lemon Or Lime Glaze For Chicken, Fish, Or Vegetables might be just the side dish you are searching for. One serving contains <b>18 calories</b>, <b>0g of protein</b>, and <b>0g of fat</b>. This recipe serves 4 and costs 19 cents per serving. This recipe is liked by 1 foodies and cooks. If you have sugar, cornstarch, parsley, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, and vegetarian</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 19%</b>. This score is not so excellent. Try <a href="https://spoonacular.com/recipes/lemon-lime-glaze-202518">Lemon-Lime Glaze</a>, <a href="https://spoonacular.com/recipes/sauces-apricot-lemon-glaze-lime-daiquiri-pineapple-ginger-119840">Sauces - Apricot Lemon Glaze/ Lime Daiquiri/ Pineapple Ginger</a>, and <a href="https://spoonacular.com/recipes/ginger-lime-chicken-wings-with-rum-glaze-492308">Ginger-Lime Chicken Wings with Rum Glaze</a> for similar recipes."</p>
            </div>
            
            <Attributes healthy={true} vegan={true} vegetarian={true} />

            <section className="prep-info">
                <Ingredients list={ingr} />
                <Steps list={steps} />
            </section>
        </article>
        <footer>  
            <p>By Samuel Jegede</p> 
        </footer>
        </div>
    );
}

export default RecipeDetail;