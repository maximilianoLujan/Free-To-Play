import Loader from "./components/Loader.js";
import Header from "./components/Header.js"
import trago from "./components/trago.js";
import Router from "./components/Router.js";




const d = document,
    $content = d.querySelector("div");
export function App(){
    $content.innerHTML = null;
    d.querySelector(".contenedor-loader").appendChild(Loader());
    Router();
}