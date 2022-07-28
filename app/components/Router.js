import {ajax} from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import trago from "./trago.js";


export default function Router(){
    const d = document,
        w = window,
        hash = location.hash,
        $content = d.querySelector(".content");
    if (!hash || hash === "#/"){
        ajax({url:`${api.RANDOM_DRINK}`,cbSuccess: (post)=>{
            $content.appendChild(trago(post));
            //d.querySelector(".loader").style.display = "none";
        }})
    } else if (hash === "#/bebidasAlcoholicas"){
        $content.innerHTML += `<h2>Aca iria el listado de las bebidas alcoholicas</h2>`;
    } else if (hash === "#/bebidasSinAlcohol"){
        $content.innerHTML += `<h2>Aca iria el listado de las bebidas sin alcohol</h2>`;
    }
}