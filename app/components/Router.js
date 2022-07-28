import {ajax} from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import Loader from "./Loader.js";
import trago from "./trago.js";
import tragoSinIngredientes from "./tragoSinIngredientes.js";


export default async function Router(){
    const d = document,
        w = window,
        hash = location.hash,
        $content = d.querySelector(".content");
    let iAlcohol = 0,
        eAlcohol = 9,
        iNoAlcohol = 0,
        eNoAlcohol = 9;
    $content.appendChild(Loader());
    if (!hash || hash === "#/"){
        await ajax({url:`${api.RANDOM_DRINK}`,cbSuccess: (post)=>{
            $content.appendChild(trago(post,0));
        }})
    } else if (hash === "#/bebidasAlcoholicas"){
        await ajax({url:api.FILTER_ALCOHOL,cbSuccess: (posts) =>{
            const $fragment = d.createDocumentFragment();
            for (iAlcohol; iAlcohol <= eAlcohol; iAlcohol++) {
                $fragment.appendChild(tragoSinIngredientes(posts,iAlcohol))
            }
            eAlcohol += 10;
            console.log(iAlcohol,eAlcohol)
            $content.appendChild($fragment);
        }})
    } else if (hash === "#/bebidasSinAlcohol"){
        await ajax({url:api.FILTER_NO_ALCOHOL,cbSuccess: (posts) =>{
            const $fragment = d.createDocumentFragment();
            for (iNoAlcohol; iNoAlcohol <= eNoAlcohol; iNoAlcohol++) {
                $fragment.appendChild(tragoSinIngredientes(posts,iNoAlcohol))
            }
            console.log("hola")
            eNoAlcohol += 10;
            console.log(eNoAlcohol,iNoAlcohol)
            $content.appendChild($fragment);
        }})
    }
    d.querySelector(".loader").style.display = "none";
}