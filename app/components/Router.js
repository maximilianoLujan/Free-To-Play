import {ajax} from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import Loader from "./Loader.js";
import trago from "./trago.js";
import tragoSinIngredientes from "./tragoSinIngredientes.js";
let iAlcohol = 0,
eAlcohol = 8,
iNoAlcohol = 0,
eNoAlcohol = 8;

export default async function Router(){
    const d = document,
        w = window,
        hash = location.hash,
        $content = d.querySelector("div");

    $content.appendChild(Loader());
    if (!hash || hash === "#/"){
        await ajax({url:`${api.RANDOM_DRINK}`,cbSuccess: (post)=>{
            $content.classList.remove("fluid-grid");
            $content.classList.add("content");
            $content.appendChild(trago(post,0));
        }})
    } else if (hash === "#/bebidasAlcoholicas"){
        await ajax({url:api.FILTER_ALCOHOL,cbSuccess: (posts) =>{
            $content.classList.remove("content");
            $content.classList.add("fluid-grid");
            const $fragment = d.createDocumentFragment();
            for (iAlcohol; iAlcohol <= eAlcohol; iAlcohol++) {
                $fragment.appendChild(tragoSinIngredientes(posts,iAlcohol))
            }
            eAlcohol += 9;
            $content.appendChild($fragment);
        }})
    } else if (hash === "#/bebidasSinAlcohol"){
        $content.classList.remove("content");
        $content.classList.add("fluid-grid");
        await ajax({url:api.FILTER_NO_ALCOHOL,cbSuccess: (posts) =>{
            const $fragment = d.createDocumentFragment();
            for (iNoAlcohol; iNoAlcohol <= eNoAlcohol; iNoAlcohol++) {
                $fragment.appendChild(tragoSinIngredientes(posts,iNoAlcohol))
            }
            eNoAlcohol += 9;
            $content.appendChild($fragment);
        }})
    }
    d.querySelector(".loader").style.display = "none";
}