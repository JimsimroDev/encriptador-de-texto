function asignacionDeTexto(elemento, texto) {
    let elementoHML = document.querySelector(elemento);
    elementoHML.placeholder = texto;
    return;
}

function asignacionDeTextoEnTextarea(elemento, texto) {
    let elementoHML = document.querySelector(elemento);
    elementoHML.value = texto;
    return;
}


asignacionDeTexto('#mi-textocifrado', 'Ingresa el texto que desee encriptar o desencriptar');

function encritado() {
    let frase = document.getElementById('mi-texarea').value;
    if (frase != "") {
        frase = frase.toUpperCase();
        let fraseEncriptada = leetEncriptar(frase);
        asignacionDeTextoEnTextarea('#mi-textocifrado', `${fraseEncriptada}`);
        Swal.fire({
            title: '¡Hola!',
            text: 'El texto se encripto con exito.',
            icon: 'success',
            confirmButtonText: '¡Entendido!'
        });
    } else {
        Swal.fire({
            title: '¡Hola!',
            text: 'Debes Ingrsear un texto para ser encriptado.',
            icon: 'error',
            confirmButtonText: '¡Entendido!'
        });
    }

}

function leetEncriptar(frase) {
    let leerText = '';
    const mapa = new Map();
    mapa.set('E', 'enter');
    mapa.set('I', 'imes');
    mapa.set('A', 'ai');
    mapa.set('O', 'ober');
    mapa.set('U', 'ufat');

    for (let i = 0; i < frase.length; i++) {
        const caracter = frase.charAt(i);
        let valor = mapa.get(caracter);
        if (valor != null) {
            leerText += valor;
            console.log(leerText);
        } else {
            leerText += caracter;
            console.log(leerText);
        }
    }
    return leerText;
}

function leetDesencriptar(frase) {
    let leerText = '';

    const mapa = new Map();
    mapa.set('enter', 'E');
    mapa.set('ines', 'I');
    mapa.set('ai', 'A');
    mapa.set('ober', 'O');
    mapa.set('ufat', 'U');

    console.log(leerText);

    for (let i = 0; i < frase.length; i++) {
        let palabra = '';
        let j = i;
        while (j < frase.length && frase[j] !== ' ') {
            palabra += frase[j];
            j++;
        }
        if (mapa.has(palabra.toLowerCase())) {
            leerText += mapa.get(palabra.toLowerCase());
        } else {
            leerText += palabra;
        }
        if (j > i) {
            i = j;
        }
    }
    return leerText;
}

function copiarTexto() {
    let textoCopiado = document.getElementById('mi-textocifrado').value;
    navigator.clipboard.writeText(textoCopiado);
    alertaPersonalizada(textoCopiado);

}

function desencriptar() {
    let frase = document.getElementById('mi-texarea').value;
    frase = frase.toUpperCase();
    let fraseDesencriptada = leetDesencriptar(frase);
    asignacionDeTextoEnTextarea('#mi-textocifrado', `${fraseDesencriptada}`);
}


function alertaPersonalizada(texto) {
    if (texto != "") {
        Swal.fire({
            title: '¡Hola!',
            text: 'El texto se copio con exito.',
            icon: 'success',
            confirmButtonText: '¡Entendido!'
        });
    } else {
        Swal.fire({
            title: '¡Hola!',
            text: 'Tiene que ingresar el texto que desee copiar.',
            icon: 'error',
            confirmButtonText: '¡Entendido!'
        });
    }
}

function toggleImagen() {
    let textarea = document.getElementById("mi-textocifrado");
    let texto = document.getElementById('texto-imagen')
    let imagen = document.getElementById("quitarImagen");

    if (textarea.value.trim() !== "") {
        imagen.style.display = "none";
        texto.style.display = 'none'

    } else {
        imagen.style.display = "block";
        texto.style.display = "block";
    }
}