var vectorNumeros = new Array(5);
var numActual = 0;
var imgTag = document.getElementById('img');
var misImagenes= new Array(10);
misImagenes [0]= "Imagenes/1.jpg";
misImagenes [1]= "Imagenes/2.jpg";
misImagenes [2]= "Imagenes/3.jpg";
misImagenes [3]= "Imagenes/4.jpg";
misImagenes [4]= "Imagenes/5.jpg";
misImagenes [5]= "Imagenes/6.jpg";
misImagenes [6]= "Imagenes/7.jpg";
misImagenes [7]= "Imagenes/8.jpg";
misImagenes [8]= "Imagenes/9.jpg";
misImagenes [9]= "Imagenes/10.jpg";

function iniciar(){
    numActual = 0;
    document.getElementById('izq').disabled = true;
    document.getElementById('der').disabled = false;
    for (let i = 0; i < 5; i++) {
        let numero =  Math.floor(Math.random() * (+9 - + 0)) + +0;
        if(vectorNumeros.includes(numero))
            i--;
        else
            vectorNumeros[i] = numero;
    }
    imgTag.src = misImagenes[vectorNumeros[0]];
}

function izquierda(){
    if(numActual === 0)
        document.getElementById('izq').disabled = true;
    else {
        numActual--;
        document.getElementById('der').disabled = false;
        imgTag.src = misImagenes[vectorNumeros[numActual]];
    }
}

function derecha(){
    console.log("NUMERO --:>" + numActual);
    if(numActual === 4)
        document.getElementById('der').disabled = true;
    else{
        numActual++;
        document.getElementById('izq').disabled=false;
        imgTag.src = misImagenes[vectorNumeros[numActual]];
    }
}