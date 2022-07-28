import { App } from "./App.js";
import Router from "./components/Router.js";

document.addEventListener("DOMContentLoaded", e =>{
    App();
})
window.addEventListener("hashchange", e =>{
    document.querySelector(".content").innerHTML= null;
    Router();
})



