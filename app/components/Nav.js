export default function Nav(){
    const $nav = document.createElement("nav");
    $nav.classList.add("navegacion");
    $nav.innerHTML = 
    `
        <a href="#/">Home</a>
        <a id="busqueda" href="#/search">Busqueda</a>
        <a href="#/bebidasAlcoholicas">Bebidas Alcoholicas</a>
        <a href="#/bebidasSinAlcohol">Bebidas sin Alcohol</a>

    `
    ;

    return $nav;
}