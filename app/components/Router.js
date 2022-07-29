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
        $content = d.querySelector("div"),
        $input = d.querySelector("input");

        d.querySelector(".loader").style.display = "block";
    if (!hash || hash === "#/"){
        await ajax({url:`${api.RANDOM_DRINK}`,cbSuccess: (post)=>{
            d.querySelector(".loader").style.display = "none";
            $input.value = null;
            $content.innerHTML = `<h2>Este es tu trago random del dia</h2>`
            $content.classList.remove("fluid-grid");
            $content.classList.add("content");
            trago(post.drinks[0]).classList.add("trago")
            $content.appendChild(trago(post.drinks[0]));
        }})
    } else if (hash === "#/bebidasAlcoholicas"){
        $input.value = null;
        await ajax({url:api.FILTER_ALCOHOL,cbSuccess: (posts) =>{
            console.log("hola")
            d.querySelector(".loader").style.display = "none";
            $content.classList.remove("content");
            $content.classList.add("fluid-grid");
            const $fragment = d.createDocumentFragment();
            while ((iAlcohol<= eAlcohol) && (tragoSinIngredientes(posts,iAlcohol)) !== false){
                $fragment.appendChild(tragoSinIngredientes(posts,iAlcohol))
                iAlcohol++;
            }
            eAlcohol += 9;
            $content.appendChild($fragment);
        }})
    } else if (hash === "#/bebidasSinAlcohol"){
        $input.value = null;
        $content.classList.remove("content");
        $content.classList.add("fluid-grid");
        d.querySelector(".loader").style.display = "block";
        await ajax({url:api.FILTER_NO_ALCOHOL,cbSuccess: (posts) =>{
            d.querySelector(".loader").style.display = "none";
            const $fragment = d.createDocumentFragment();
            while ((iNoAlcohol <= eNoAlcohol) && (tragoSinIngredientes(posts,iNoAlcohol)) !== false){
                $fragment.appendChild(tragoSinIngredientes(posts,iNoAlcohol))
                iNoAlcohol++;
            }
            eNoAlcohol += 9;
            $content.appendChild($fragment);
        }})
    } else{
        $content.classList.remove("content");
        $content.classList.add("fluid-grid");
        await ajax({url:`${api.BY_NAME}${$input.dataset.dir}`,cbSuccess: (post)=>{
            d.querySelector(".loader").style.display = "none";
            const $fragment2 = d.createDocumentFragment();
            if (!post.drinks){
                $content.innerHTML = `<h1 class="error">No se encontro ningun trago con el nombre ${$input.dataset.dir}</h1>`
            } else{
                post.drinks.forEach(drink =>{
                    $fragment2.appendChild(trago(drink))
                })
                $content.appendChild($fragment2)
            }
        }})
    }
    
}