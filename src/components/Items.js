import React from 'react';
import './styles/reset.css';
import './styles/list.css';

const Items = ({ list, label_, label_class, cont, class_ }) => {
    let el = [];
    
    for(let i=0; i<list.length; i++) {
        const next = list[i];
    	el.push(<li>{next}</li>);
    }

    return (
        <div className="prep-info">
            <div className="container-2">
                <div className=".container-ingr">
                    <label className=".label-ingr" for=".ingredients">Ingredients:</label>
                    <ul className=".ingredients">
                        {el}   
                    </ul>
                </div>
                <div className=".container-ingr">
                    <label className=".label-ingr" for=".ingredients">Ingredients:</label>
                    <ul className=".ingredients">
                        {el}   
                    </ul>
                </div>
            </div>
        </div>
    );   
}
export default Items;