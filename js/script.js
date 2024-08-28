const ingresoTexto = document.getElementById ("ingresoTexto");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const botonCopiar = document.getElementById ("botonCopiar");
const mensajeFinal = document.getElementById ("mensajeFinal");
const muneco = document.getElementById ("muneco");
const derechaInfo = document.getElementById ("derechaInfo");
const derecha = document.getElementById ("derecha");

/* "e",  "enter"
   "i",  "imes"
   "a",  "ai"
   "o",  "ober"
   "u",  "ufat"
*/

let remplazar = [
    ["e",  "enter"],
    ["i",  "imes"],
    ["a",  "ai"],
    ["o",  "ober"],
    ["u",  "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("oculto");
    ingresoTexto.value = ""; //puede borrar el texto pero al pegar lo encriptado borra todo
    derechaInfo.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}


botonEncriptar.addEventListener ("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    function encriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes( remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }

    remplace(encriptar(texto));
       
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if(newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    };
    remplace(desencriptar(texto))

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy');
    alert("texto copiado");

    mensajeFinal.innerHTML = "";

    muneco.classList.remove("oculto");
    
    derechaInfo.style.display = "block";
    botonCopiar.style.display = "none";

    derecha.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
})