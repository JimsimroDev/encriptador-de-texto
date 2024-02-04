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

function textEncriptar(frase) {
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
    leerText = leerText.toLowerCase();
    return leerText;
}

function encritado() {
    let frase = document.getElementById('mi-texarea').value;
    if (frase != "") {
        frase = frase.toUpperCase();
        let fraseEncriptada = textEncriptar(frase);
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

function textDesencriptar(frase) {
    let leerText = '';

    const mapa = new Map();
    mapa.set('enter', 'E');
    mapa.set('ines', 'I');
    mapa.set('ai', 'A');
    mapa.set('ober', 'O');
    mapa.set('ufat', 'U');

    console.log(leerText);

    let i = 0;
    while (i < frase.length) {
        let valor = null;
        for (let j = 100; j >= 1; j--) {
            let subcadena = frase.substr(i, j);
            if (mapa.has(subcadena)) {
                valor = mapa.get(subcadena);
                leerText += valor;
                i += j;
                break;
            }
        }
        if (valor === null) {
            leerText += frase[i];
            i++;
        }
    }
    leerText = leerText.toLowerCase();
    return leerText;
}

function desencriptar() {
    let frase = document.getElementById('mi-texarea').value;
    if (frase != "") {
        frase = frase.toLowerCase();
        let fraseDesencriptada = textDesencriptar(frase);
        Swal.fire({
            title: '¡Hola!',
            text: 'El texto se desencripto con exito.',
            icon: 'success',
            confirmButtonText: '¡Entendido!'
        });
        asignacionDeTextoEnTextarea('#mi-textocifrado', `${fraseDesencriptada}`);
    } else {
        Swal.fire({
            title: '¡Hola!',
            text: 'Debes Ingrsear un texto para ser desencriptado.',
            icon: 'error',
            confirmButtonText: '¡Entendido!'
        });
    }
}

function copiarTexto() {
    let textoCopiado = document.getElementById('mi-textocifrado').value;
    navigator.clipboard.writeText(textoCopiado);
    alertaPersonalizada(textoCopiado);

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