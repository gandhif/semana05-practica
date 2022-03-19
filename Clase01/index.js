console.log('Hola')
var x = 'hola soy una variable';
function nNumeros(){
    let num =prompt('cuantos numeros pares deseas');
    console.log(num)
}
function Promedio(){
}

function init(){
    InterPromedio()
}

function InterPromedio(){
let num=document.getElementById(totNotas);
console.log(num);
let resultado = document.getElementById("resultado");
resultado.textContent=3;

}
function Calculadora(){
    
    let var1 = parseInt(prompt("Ingrese Valor 1"));
    let ope = parseInt(prompt("ingres una opcion: 1 suma / 2 resta /3 multiplicacion /4 division"));    
    let var2 = parseInt(prompt("Ingrese Valor 2"));
    let pro=0;
    switch (ope) {
        case 1:
            pro =(var1)+(var2);
            alert("Resultado: " + pro);
            break;

        case 2:
            pro =(var1)-(var2);
            alert("Resultado: " + pro);
            break;
        case 3:
            pro =(var1)*(var2);
            alert("Resultado: " + pro);
            break;
    
        case 4:
            if (var2==0) {
                alert("No definido");
            } else {
            pro =var1 / var2;
            alert("Resultado: " + pro);
            }            
            break;
    
        default:
            alert("Opcion no valido");
            break;
    }
}