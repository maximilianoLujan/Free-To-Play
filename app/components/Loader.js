
export default function Loader(){
    const $loader = document.createElement("img");
    $loader.src = "app/assets/oval.svg";
    $loader.alt = "Loading...";
    $loader.classList.add("loader");

    return $loader;
}