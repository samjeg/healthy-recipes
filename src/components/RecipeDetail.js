import React  from 'react';
import './styles/reset.css';
import './styles/detail.css';
import '../data/recipe_details.json';
import Items from './Items';
import Stars from './Stars2';


const RecipeDetail = () => {
    const steps = ["1/2 cup unsalted chicken broth", "2 teaspoons cornstarch",
                   "1 teaspoon lemon or lime juice", "1 teaspoon grated lemon or lime peel",
                   "1 tablespoon chopped parsley", "1 tablespoon sugar"];

    const ingr = ["Cornstarch", "Limepeel", "Parsley", "Sugar", "Lime Juice", "Chicken Broth"];

    const name1 = "Steps";

    const name2 = "Ingredients";

	return (  
        <div>      
		<section class="head-panel">
            <i class="fas fa-carrot"></i>
            <h1>healthy recipes</h1>
        </section>
        <article>
            <div class="attributes">
                <h2>Summary</h2>
                <label class="prep-time-label" for="prep-time">Prep time:</label>
                <time class="prep-time" datetime="PT4H18M3S">25m</time>                
                <label class="cooking-time-label" for="prep-time">Cooking time:</label>
                <time class="cooking-time" datetime="PT4H18M3S">2h 30m</time>
                <label class="ratings-label" for="ratings">ratings:</label> {/*Rating not in the correct position*/}
                <Stars size={5} />
            </div>
            <hr />
            
            <div class="container">
                <img class="img" alt="no image" src="" align="Top"/> {/*Image not renderring*/}
                <p class="summary">Lemon Or Lime Glaze For Chicken, Fish, Or Vegetables might be just the side dish you are searching for. One serving contains <b>18 calories</b>, <b>0g of protein</b>, and <b>0g of fat</b>. This recipe serves 4 and costs 19 cents per serving. This recipe is liked by 1 foodies and cooks. If you have sugar, cornstarch, parsley, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, and vegetarian</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 19%</b>. This score is not so excellent. Try <a href="https://spoonacular.com/recipes/lemon-lime-glaze-202518">Lemon-Lime Glaze</a>, <a href="https://spoonacular.com/recipes/sauces-apricot-lemon-glaze-lime-daiquiri-pineapple-ginger-119840">Sauces - Apricot Lemon Glaze/ Lime Daiquiri/ Pineapple Ginger</a>, and <a href="https://spoonacular.com/recipes/ginger-lime-chicken-wings-with-rum-glaze-492308">Ginger-Lime Chicken Wings with Rum Glaze</a> for similar recipes."</p>
            </div>

            <ul class="attributes-2">
                <li><p>healthy:</p>
                    <i class="fas fa-heartbeat"></i>
                </li>
                <li>
                    <p>vegetarian:</p>
                    <i class="fas fa-leaf"></i>
                </li>
                <li>
                    <p>vegan:</p>
                    <i class="fas fa-seedling"></i>
                </li>
            </ul>   

            <section class="prep-info">
                <Items list={steps} label_={name1} /> 
                <Items list={ingr} label_={name2} />
            </section>
        </article>
        <footer>  
            <p>By Samuel Jegede</p> 
        </footer>
        </div>
    );
}

export default RecipeDetail;