//Faça um programa JavaScript que receba 3 números informados pelo 
//usuário e em seguida apresente uma mensagem de alerta
//informando qual é o maior número dentre os números informados.
var numero1 = parseInt(prompt("Informe o primeiro número"))
var numero2 = parseInt (prompt("Informe o segundo número"))
var numero3 = parseInt(prompt("Informe o terceiro numero"))

if (numero1 > numero2 && numero1 > numero3){
    console.log("Maior número: " + numero2)
}
else if(numero2 > numero3){
    console.log("Maior número: " + numero2)
}
else{
    console.log("Maior número: " + numero3)
}
