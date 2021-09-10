import React from 'react';
import './styles/reset.css';
import './styles/Info.css';


const Info = () => {
    return (
        <div>
        <section className="head-panel">
            <i className="fas fa-carrot"></i>
            <h1>healthy recipes</h1>
        </section>
        <article>
            <div className="attributes">
                <h2>Summary</h2>
                <label className="prep-time-label" for="prep-time">time:</label>
                <time className="prep-time" datetime="PT4H18M3S">2h 30m</time>
                <label className="ratings-label" for="ratings">ratings:</label>
                <ul className="ratings">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                </ul>
            </div>
            <hr></hr>

            <img className="img" alt="no image" src="../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" align="Top"/>     
            <p className="summary">Lemon Or Lime Glaze For Chicken, Fish, Or Vegetables 
            might be just the side dish you are searching for. One serving contains 
            <b>18 calories</b>, <b>0g of protein</b>, and <b>0g of fat</b>. This 
            recipe serves 4 and costs 19 cents per serving. This recipe is liked 
            by 1 foodies and cooks. If you have sugar, cornstarch, parsley, and a 
            few other ingredients on hand, you can make it. It is a good option if 
            you're following a <b>gluten free, dairy free, and vegetarian</b> diet. 
            From preparation to the plate, this recipe takes around <b>45 minutes</b>. 
            All things considered, we decided this recipe <b>deserves a spoonacular score 
            of 19%</b>. This score is not so excellent. 
            Try <a href="https://spoonacular.com/recipes/lemon-lime-glaze-202518">Lemon-Lime Glaze</a>, 
            <a href="https://spoonacular.com/recipes/sauces-apricot-lemon-glaze-lime-daiquiri-pineapple-ginger-119840">
            Sauces - Apricot Lemon Glaze/ Lime Daiquiri/ Pineapple Ginger</a>, and 
            <a href="https://spoonacular.com/recipes/ginger-lime-chicken-wings-with-rum-glaze-492308">Ginger-Lime Chicken Wings with Rum Glaze</a> 
            for similar recipes."</p>

            <ul className="attributes-2">
                <li><p>healthy:</p>
                    <i className="fas fa-heartbeat"></i>
                </li>
                <li><p>dairy included:</p>
                    <i className="fas fa-cheese"></i>
                </li>
                <li>
                    <p>cheap:</p>
                    <i className="fas fa-piggy-bank"></i>
                </li>
                <li>
                    <p>vegetarian:</p>
                    <i className="fas fa-leaf"></i>
                </li>
                <li>
                    <p>vegan:</p>
                    <i className="fas fa-seedling"></i>
                </li>
            </ul>   

            <section className="prep-info">
                <div className="container-2">
                    <img className="img-2" alt="no image available" src="../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"/>
                </div>
                <div className="container-instr">
                    <label className="label-instr" for="instructions">Instructions:</label>
                    <ul className="instructions">
                        <li>1/2 cup unsalted chicken broth</li>
                        <li>2 teaspoons cornstarch</li>
                        <li>1 teaspoon lemon or lime juice</li>
                        <li>1 teaspoon grated lemon or lime peel</li>
                        <li>1 tablespoon chopped parsley</li>
                        <li>1 tablespoon sugar</li>                                        
                    </ul>
                </div>
                <div className="container-ingr">
                    <label className="label-ingr" for="ingredients">Ingredients:</label>
                    <ul className="ingredients" >
                        <li>Cornstarch</li>
                        <li>Limepeel</li>
                        <li>Parsley</li>
                        <li>Sugar</li>
                        <li>Lime Juice</li>
                        <li>Chicken Broth</li>     
                    </ul>
                </div>
            </section>
        </article>
        <footer>  
            <p>By Samuel Jegede</p> 
        </footer>
        </div>
    );
}

export default Info;