var valores = [1, 2, 3, 4, 5]
/*num.push()                     /*Acrescenta variavel a ultima casa*/
/*num.sort()                     /*Deixa as variaveis em ordem crescente*/
/*console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posiçoes`) /*Num.lenght = Diz quantas variaveis existem naquele vetor*/
/*console.log(num[0])*/
for(var pos=0; pos < valores.length; pos++ ) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
console.log('OUTRO JEITO')
for( var pos in valores ){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
console.log(valores.indexOf(1))