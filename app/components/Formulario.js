export default function Formulario(){
    const $formulario = document.createElement("form"),
        $input = document.createElement("input");
    $formulario.classList.add("form-search");
    $input.name = "search";
    $input.type = "search";
    $formulario.appendChild($input);
    return $formulario;
}