/* 
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
*/

((d) => {
  const $input = d.querySelector(".input"),
    $encrypt = d.querySelector(".encrypt"),
    $decrypt = d.querySelector(".decrypt"),
    $decryptOutput = d.querySelector(".decryptOutput"),
    $copy = d.querySelector(".copy"),
    $emptyOutput = d.querySelector(".emptyOutput");

  let text = "";
  $input.addEventListener("input", (e) => {
    text = e.target.value;
  });

  $encrypt.addEventListener("click", (e) => {
    function exchange(text) {
      if (!text) {
        console.log("Vacio");
        $emptyOutput.classList.remove("none");
        $decryptOutput.classList.add("none");
        $copy.setAttribute("id", "none");
      } else {
        $emptyOutput.classList.add("none");
        $decryptOutput.classList.remove("none");
        $copy.removeAttribute("id", "none");

        function encryption(text) {
          console.log("Encriptado");
          text = text.toLocaleLowerCase();
          text = text.split("e").join("enter");
          text = text.split("i").join("imes");
          text = text.split("a").join("ai");
          text = text.split("o").join("ober");
          text = text.split("u").join("ufat");
          $decryptOutput.innerHTML = `<p class="copyText">${text}</p>`;
        }
        encryption(text);
      }
    }
    exchange(text);
  });

  $decrypt.addEventListener("click", (e) => {
    function exchangeTwo(text) {
      if (!text) {
        console.log("Vacio");
        $emptyOutput.classList.remove("none");
        $decryptOutput.classList.add("none");
        $copy.setAttribute("id", "none");
      } else {
        $emptyOutput.classList.add("none");
        $decryptOutput.classList.remove("none");
        $copy.removeAttribute("id", "none");

        function uncryption(text) {
          console.log("Desencriptado");
          text = text.toLocaleLowerCase();
          text = text.split("enter").join("e");
          text = text.split("imes").join("i");
          text = text.split("ai").join("a");
          text = text.split("ober").join("o");
          text = text.split("ufat").join("u");
          $decryptOutput.innerHTML = `<p class="copyText">${text}</p>`;
        }
        uncryption(text);
      }
    }
    exchangeTwo(text);
  });

  $copy.addEventListener("click", function (e) {
    console.log("Copiado");
    for (let i = 0; i < 5; i++) {
      // Seleccionar el texto
      let $text = d.querySelector(".copyText");
      let range = d.createRange();
      range.selectNode($text);
      window.getSelection().addRange(range);
      let result = d.execCommand("copy");

      // Eliminar el texto seleccionado
      window.getSelection().removeAllRanges();
      // Cuando los navegadores lo soporten, habría
      // Que utilizar: removeRange(range)
    }
  });
})(document);
