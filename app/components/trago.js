export default function trago(props){
    let drink = props,
        html = ``;
        
    let {strDrink,strDrinkThumb,strInstructions} = drink;

    if (drink.strIngredient1 !== null){
        html += `<li>${drink.strIngredient1}</li>`;
    }
    if (drink.strIngredient2 !== null){
        html += `<li>${drink.strIngredient2}</li>`;
    }
    if (drink.strIngredient3 !== null){
        html += `<li>${drink.strIngredient3}</li>`;
    }
    if (drink.strIngredient4 !== null){
        html += `<li>${drink.strIngredient4}</li>`;
    }
    if (drink.strIngredient5 !== null){
        html += `<li>${drink.strIngredient5}</li>`;
    }
    if (drink.strIngredient6 !== null){
        html += `<li>${drink.strIngredient6}</li>`;
    } 
    if (drink.strIngredient7 !== null){
        html += `<li>${drink.strIngredient7}</li>`;
    } 
    if (drink.strIngredient8 !== null){
        html += `<li>${drink.strIngredient8}</li>`;
    } 
    if (drink.strIngredient9 !== null){
        html += `<li>${drink.strIngredient9}</li>`;
    } 
    if (drink.strIngredient10 !== null){
        html += `<li>${drink.strIngredient10}</li>`;
    } 
    if (drink.strIngredient11 !== null){
        html += `<li>${drink.strIngredient11}</li>`;
    } 
    if (drink.strIngredient12 !== null){
        html += `<li>${drink.strIngredient12}</li>`;
    } 
    if (drink.strIngredient13 !== null){
        html += `<li>${drink.strIngredient13}</li>`;
    } 
    if (drink.strIngredient14 !== null){
        html += `<li>${drink.strIngredient14}</li>`;
    } 
    if (drink.strIngredient15 !== null){
        html += `<li>${drink.strIngredient15}</li>`;
    } 
    const $figura = document.createElement("figure");
    $figura.classList.add("trago-griditem");
    $figura.classList.add("trago");
    $figura.innerHTML = 
    `
        <h2>Drink: ${strDrink.toUpperCase()}</h2>
        <img src="${strDrinkThumb}" alt="${strDrink}" ></img>
        <ul>
            ${html}
        </ul>
        <p>${strInstructions}</p>
    `;


    return($figura);
}