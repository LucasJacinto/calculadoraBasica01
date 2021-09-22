function incorporar(n) {
    calcul.txt.value = calcul.txt.value + n
}

function apagar() {
    calcul.txt.value = calcul.txt.value.substring(0, calcul.txt.value.length -1)
}

function porcentagem () {
    calcul.txt.value *= 0.01 
}

/* Não consegui pensar em outra maneira de fazer a porcentagem funcionar, então multipiquei o valor que será a porcentagem por 0.01 pra que o usuário o multiplique pelo número do qual ele quer tirar a porcentagem. 
Ex.: 5%*20 é o mesmo que 0.05*20 */