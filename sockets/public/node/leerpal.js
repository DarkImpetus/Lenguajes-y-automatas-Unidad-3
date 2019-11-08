function buscar() {
    //Obtenemos el texto del campo
    var texto = document.getElementById('texto').value;
    //Reemplazamos los saltos de linea por espacios
    texto = texto.replace(/\r?\n/g, " ");
    //Reemplazamos los espacios seguidos por uno solo
    texto = texto.replace(/[ ]+/g, " ");
    //Quitamos los espacios del principio y del final
    texto = texto.replace(/^ /, "");
    texto = texto.replace(/ $/, "");
    //Troceamos el texto por los espacios
    var textoTroceado = texto.split(" ");
    //Contamos todos los trozos de cadenas que existen
    var numeroPalabras = textoTroceado.length;
    //Mostramos el número de palabras
    document.getElementById('NumPal').innerHTML = numeroPalabras;


    //Buscarque da las vocales disponibles
    var vocal = document.getElementById('texto').value;
    var numeroVocales = (vocal.match(/[aeiou]/gi) == null) ? 0 : vocal.match(/[aeiou]/gi).length;
    document.getElementById('NumVoc').innerHTML = numeroVocales;

    var mayuscula = document.getElementById('texto').value;
    var numeromayuscula = mayuscula.match(/[A-Z]/gm).length;
    document.getElementById('NumMay').innerHTML = numeromayuscula;
}