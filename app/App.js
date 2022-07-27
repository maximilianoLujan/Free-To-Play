import Loader from "./components/Loader.js";
import Header from "./components/Header.js"
import { ajax } from "./helpers/ajax.js"
import api from "./helpers/wp_api.js" 
import trago from "./components/trago.js";




const d = document,
    $root =d.querySelector(".root");
export function App(){
    $root.appendChild(Header());
    $root.appendChild(Loader());
    ajax({url:`${api.RANDOM_DRINK}`,cbSuccess:(post)=>{
        $root.appendChild(trago(post));
        d.querySelector(".loader").style.display = "none";
        console.log(post)
    }})

}