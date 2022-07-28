export default function tragoSinIngredientes(props,indice){
    let drink = props.drinks[indice];
    let {strDrink,strDrinkThumb} = drink;

    const $figura = document.createElement("figure");
    $figura.classList.add("trago-griditem");
    $figura.innerHTML = 
    `
        <h2>${strDrink.toUpperCase()}</h2>
        <img src="${strDrinkThumb}" alt="${strDrink}" ></img>
    `;

    return($figura);
}