let btnCerrar = document.getElementById("btnCerrar");
let btnAbrir = document.getElementById("btnAbrir");
let info = document.getElementById("informacion");

btnCerrar.addEventListener("click", ()=>{
    info.style.display = "none";
});

btnAbrir.addEventListener("click", ()=>{
    info.style.display = "flex";
});