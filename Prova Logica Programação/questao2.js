//Crie um programa que solicite ao usuário 3 notas (valores numéricos) e calcule a 
//média aritmética dessas notas. Se a média for maior ou igual a 7, 
//exiba a mensagem "Aprovado"; caso contrário, exiba "Reprovado".

var nota1= parseInt (prompt("Informe a primeira nota"))
var nota2= parseInt (prompt("Informe a segunda nota"))
var nota3= parseInt (prompt("Informe a terceira nota"))
var media= (nota1+ nota2 + nota3)/3

if(media >=7){
    document.write("Aprovado")
}
else{
    document.write("Reprovado")
}
