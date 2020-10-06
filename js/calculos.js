//Primer Ejerccio

function calcular1(){
    let numero1=document.getElementById('primer_numero1').value;
    let numero2=document.getElementById('segundo_numero1').value;
    if(numero1==='' && numero2 ===''){
        alert('Falta ingresar datos');
    }else{
        if(Number(numero1)>Number(numero2)){
            alert('El primer número es el mayor');
        }else if(Number(numero1)<Number(numero2)){
            alert('El primer número es el más pequeño');
        }else{
            alert('Ambos numeros tienen el mismo valor');
        }
    }
}
function borrar1(){
    document.getElementById('primer_numero1').value = '';
    document.getElementById('segundo_numero1').value = '';
}                                                                  
document.getElementById('calcular1').addEventListener('click',calcular1);
document.getElementById('borrar1').addEventListener('click',borrar1);

//Segundo Ejerccio

function calcular2(){
    let numero1=document.getElementById('primer_numero2').value;
    let numero2=document.getElementById('segundo_numero2').value;
    let numero3=document.getElementById('tercero_numero2').value;
    if(Number(numero1)>Number(numero2)){
        if(Number(numero2)<Number(numero3)){
            if(Number(numero3)>Number(numero1)){
                alert(`Numero central: ${numero1}`);
            }else{
                alert(`Numero central: ${numero3}`);
            }
        }else{
            alert(`Numero central: ${numero2}`);
        }
    }else if(Number(numero1)<Number(numero2)){
        if(Number(numero2)>Number(numero3)){
            if(Number(numero3)>Number(numero1)){
                alert(`Numero central: ${numero3}`);
            }else{
                alert(`Numero central: ${numero1}`);
            }
        }else{
            alert(`Numero central: ${numero2}`);
        }
    }else{
        alert('Ingresar un valor mayor a 0')
    }
}
function borrar2(){
    document.getElementById('primer_numero2').value = '';
    document.getElementById('segundo_numero2').value = '';
    document.getElementById('tercero_numero2').value = '';
}                                                                  
document.getElementById('calcular2').addEventListener('click',calcular2);
document.getElementById('borrar2').addEventListener('click',borrar2);

//Terce Ejerccio

function calcular3(){
    let raiz2 = document.getElementById('raiz_cuadrada').value;
    let total=0;
    if(raiz2 === '' || Number(raiz2) <= 0){
        alert('Indeterminado')
    }else{
        total = Math.sqrt(Number(raiz2));
        document.getElementById('resultado_raiz').value = total;
        document.getElementById('adicional').innerHTML = `de ${raiz2}`;
    }
}
function borrar3(){
    document.getElementById('raiz_cuadrada').value = '';
    document.getElementById('resultado_raiz').value = '';
    document.getElementById('adicional').innerHTML = '';
}  
document.getElementById('calcular3').addEventListener('click',calcular3);
document.getElementById('borrar3').addEventListener('click',borrar3);

//Cuarto Ejerccio

function calcular4(){
    let angulo = document.getElementById('angulo').value;
    let agudo='Agudo',obtuso='Obtuso',recto='Recto';
    if(angulo === ''){
        alert('Falta ingresar angulo')
    }else if(Number(angulo)<=360){
        if(Number(angulo)===90){
            document.getElementById('tipo_angulo').value = recto;
        }else if(Number(angulo)>90){
            document.getElementById('tipo_angulo').value = obtuso;
        }else{
            document.getElementById('tipo_angulo').value = agudo;
        }
    }else{
        alert('Angulo desconocido')
    }
}
function borrar4(){
    document.getElementById('angulo').value = '';
    document.getElementById('tipo_angulo').value = '';
}  
document.getElementById('calcular4').addEventListener('click',calcular4);
document.getElementById('borrar4').addEventListener('click',borrar4);

//Quinto Ejerccio

function calcular5(){
    let indicador1 = document.getElementById('inicial').value;
    let indicador2 = document.getElementById('final').value;
    document.write(`<table border='2'>`);
    document.write(`<tr>`);
    document.write(`<td>TABLA DE NUMERO ${indicador1}</td>`);
    document.write(`</tr>`);
    for(var i=1;i<=Number(indicador2);i++){
        total = Number(indicador1) * i;
        document.write(`<tr>`);
        document.write(`<td>${indicador1}</td>`);
        document.write(`<td>*</td>`);
        document.write(`<td>${i}</td>`);
        document.write(`<td>=</td>`);
        document.write(`<td>${total}</td>`);
        document.write(`</tr>`);
        console.log(i);
    };
    document.write(`</table>`);
}
function borrar5(){
    document.getElementById('inicial').value = '';
    document.getElementById('final').value = '';
}  
document.getElementById('calcular5').addEventListener('click',calcular5);
document.getElementById('borrar5').addEventListener('click',borrar5);


