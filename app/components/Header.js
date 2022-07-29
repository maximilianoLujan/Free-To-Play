import Formulario from "./Formulario.js";
import Nav from "./Nav.js";
import title from "./Title.js";

export default function Header(){
    const $header = document.createElement("header");

    $header.appendChild(title());
    $header.appendChild(Nav());
    $header.appendChild(Formulario());    
    

    return $header;
}