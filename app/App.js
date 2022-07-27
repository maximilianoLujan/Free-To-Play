import Loader from "./components/Loader.js";
import Header from "./components/Header.js"
import { ajax } from "./helpers/ajax.js"
import api from "./helpers/wp_api.js" 




const d = document;
export function App(){
    d.querySelector(".root").appendChild(Header());
    d.querySelector(".root").appendChild(Loader());
    ajax({url:`${api.FILTER_NO_ALCOHOL}`,cbSuccess:(post)=>{console.log(post)}})
}