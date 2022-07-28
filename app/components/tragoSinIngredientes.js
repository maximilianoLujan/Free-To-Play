export default function tragoSinIngredientes(props,indice){
    let drink = props.drinks[indice];
    let {strDrink,strDrinkThumb} = drink;

    const $figura = document.createElement("figure");
    $figura.classList.add("trago");
    $figura.innerHTML = 
    `
        <h2>Drink: ${strDrink.toUpperCase()}</h2>
        <img src="${strDrinkThumb}" alt="${strDrink}" ></img>
    `;

    return($figura);
}