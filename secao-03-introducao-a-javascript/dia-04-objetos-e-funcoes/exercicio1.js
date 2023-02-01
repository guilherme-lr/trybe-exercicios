//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log("Bem-vinda, " + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info['recorrente'] = 'sim';
console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (chave in info){
    console.log(chave);
}

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for (key in info){
    console.log(info[key]);
}
