

export default function Formulario(){
    const $formulario = document.createElement("form"),
        $input = document.createElement("input"),
        w = window;
    $formulario.classList.add("form-search");
    $input.name = "search";
    $input.type = "search";
    $input.dataset.dir =""
    $input.placeholder = "Escriba el trago que desea buscar...";
    $formulario.appendChild($input);

    document.addEventListener("submit", e =>{
        if (e.target.matches(".form-search")){
            e.preventDefault();
            $input.dataset.dir = `${$input.value}`;
            location.href = `${document.getElementById("busqueda").href}.php?s=${$input.value}`
        }
    })


    return $formulario;
} 