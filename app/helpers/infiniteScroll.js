import Router from "../components/Router.js";

export default async function InfiniteScroll(hash){
    const d = document,
        w = window;

    let {scrollTop,clientHeight,scrollHeight} = d.documentElement;

    if ((hash === "#/bebidasAlcoholicas")||(hash === "#/bebidasSinAlcohol")){
        if ((scrollTop + clientHeight) >= scrollHeight){
            Router()
        }
    } else{
        return false;
    }
}