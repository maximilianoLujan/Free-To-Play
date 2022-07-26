import wp_api from "../helpers/wp_api.js";

export default function title(){
    const $title = document.createElement("h1");
    $title.innerHTML = 
    `<a href="${wp_api.DOMAIN}" target="_blank">
        ${wp_api.NAME.toUpperCase()}
    </a>`
    return $title;
}