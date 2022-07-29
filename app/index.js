import { App } from "./App.js";
import Header from "./components/Header.js";
import InfiniteScroll from "./helpers/infiniteScroll.js";

const $root =document.querySelector(".root"),
    w = window,
    d = document;
document.addEventListener("DOMContentLoaded", e =>{
    $root.appendChild(Header());
    w.addEventListener("scroll", e =>{
        InfiniteScroll(w.location.hash)
    })
    App();
})
window.addEventListener("hashchange", e =>{
    document.querySelector("div").innerHTML= null;
    document.querySelector(".contenedor-loader").innerHTML = null;
    App();
    //Router();
})



