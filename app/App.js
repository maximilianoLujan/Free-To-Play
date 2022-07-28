import Loader from "./components/Loader.js";
import Header from "./components/Header.js"
import trago from "./components/trago.js";
import Router from "./components/Router.js";




const d = document,
    $root =d.querySelector(".root"),
    $content = d.querySelector(".content")
export function App(){
    $content.innerHTML = null;
    $root.appendChild(Header());
    $content.appendChild(Loader());
    Router();
}