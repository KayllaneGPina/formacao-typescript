## Desafio 1 - Entrada e Saída Lendo e Pulando Nomes
Faça um programa com as características abaixo:

1. Leia 10 nomes, sem espaço em branco;
2. Imprima o terceiro nome da lista;
3. Imprima o sétimo nome da lista;
4. Imprima o nono nome da lista.

### Entrada
A entrada consiste vários arquivos de teste, cada um com dez linhas e em cada linha tem um nome de no até 30 caracteres e sem espaço em branco. Conforme mostrado no exemplo de entrada a seguir.

### Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, gere três linhas conforme os procedimentos 2, 3 e 4. Use o exemplo abaixo para clarear o que está sendo pedido.

|Entrada|Saída|
|---|---|
|USP|UFCG|
|UFPE|ITA|
|UFCG|URI|
|UFRN||
|UFRJ||
|IME||
|ITA||
|UNIOESTE||
|URI||
|UFG||

---

## Desafio 2 - Cálculo Simples
Neste problema, deve-se ler:

O código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1. O código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

### Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

### Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

|Entrada|Saída|
|-|-|
|12 1 5.30 <br> 16 2 5.10|VALOR A PAGAR: R$ 15.50|

---

## Desafio 3 - A idade de Magali
Magali é mãe de três filhos que têm idades diferentes. Ela notou que, neste ano, a soma das idades dos seus três filhos é igual à idade dela. Neste problema, dada a idade de Magali e as idades de dois dos filhos, seu programa deve computar e imprimir a idade do filho mais velho. Por exemplo, se sabemos que Magali tem 52 anos e as idades conhecidas de dois dos filhos são 14 e 18 anos, então a idade do outro filho, que não era conhecida, tem que ser 20 anos, pois a soma das três idades tem que ser 52. Portanto, a idade do filho mais velho é 20. Em mais um exemplo, se Magali tem 47 anos e as idades de dois dos filhos são 21 e 9 anos, então o outro filho tem que ter 17 anos e, portanto, a idade do filho mais velho é 21.

### Entrada
A primeira linha da entrada contém um inteiro M representando a idade de Magali. A segunda linha da entrada contém um inteiro A representando a idade de um dos filhos. A terceira linha da entrada contém um inteiro B representando a idade de outro filho.

### Saída
Seu programa deve imprimir uma linha, contendo um número inteiro, representando a idade do filho mais velho de Magali.

**Restrições**
• 40 ≤ M ≤ 110

• 1 ≤ A < M

• 1 ≤ B < M

• A ≠ B

|Entrada|Saída|
|-|-|
|52 <br> 14 <br> 18|20|