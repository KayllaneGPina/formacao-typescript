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
---

## Desafio 04 - Arrays Pares
Seu José possui uma lista de entregas das suas mercadorias e cada uma delas possui um número de identificação. As entregas mais urgentes são as que possuem o número de identificação PAR. Porém, seu José é muito atarefado e pediu sua ajuda para criar um programa que, de acordo com uma lista, mostrasse apenas as entregas urgentes (pares). Utilizando o seu conhecimento sobre Arrays, uma estrutura de dados que armazena uma coleção de dados em um bloco de memória, crie um programa que, dado a lista: **{2, 3, 5, 7, 11, 13, 18, 34}**, **retorne como resultado apenas os números pares dessa array.**

### Entrada
A entrada consiste em um Array de números inteiros positivos. ([2, 3, 5, 7, 11, 13, 18, 34])

### Saída
A saída do desafio equivale aos números pares do Array, como mostra o exemplo a baixo, porém com o Array do enunciado:

|Entrada|Saída|
|-|-|
|8, 9, 11, 13, 16, 17, 23, 24|8 <br> 16 <br> 24|

---

## Desafio 05 - Teorema da Divisão Euclidiana
Você recebeu desafio de desenvolver um programa que calcule o quociente e o resto da divisão de dois números inteiros. Não se esqueça que o quociente e o resto da divisão de um inteiro a por um inteiro não-nulo b são respectivamente os únicos inteiros q e r tais que:

**0 ≤ r < |b|**
Se **r < 0: r = r - |b|**
**a = b × q + r**
**q = ( a - r ) / b**

Caso você não saiba, o teorema que garante a existência e a unicidade dos inteiros q e r é conhecido como ‘Teorema da Divisão Euclidiana’ ou ‘Algoritmo da Divisão’.

**  **|b| (Módulo / Valor absoluto):** É o valor representado de forma positiva;

### Entrada
A entrada é composta por dois números inteiros **a** e **b** (-1.000 ≤ a, b < 1.000).

### Saída
Imprima o quociente q seguido pelo resto r da divisão de **a** por **b**, considerando as regras apresentadas a cima.

|Entrada|Saída|
|-|-|
|7 3|2 1|

---

## Desafio 06 - Coordenadas de um Ponto
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0). Se o ponto estiver na origem, escreva a mensagem “Origem”. Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

### Entrada
A entrada contem as coordenadas de um ponto.

### Saída
A saída deve apresentar o quadrante em que o ponto se encontra.

|Entrada|Saída|
|-|-|
|4.5 -2.2|Q4|
|0.1 0.1|Q1|

---

## Desafio 07 - Réveillon de Copacabana
O Réveillon é uma das festas mais esperadas do hotel Copacabana Palace. Mesmo sendo restrito para um seleto grupo de pessoas, o salão fica abarrotado de gente e muitas vezes os garçons não dão conta de atender a todos da mesma maneira. 

Os convidados que sentam nas pontas das mesas são os privilegiados, pois são atendidos com somente um pedido, mas os demais precisam sempre pedir duas vezes, pois os garçons não conseguem dar a mesma atenção a eles. Além disso, há uma superstição de entrada de ano que diz que, se não houver um número par de pessoas que não sentam nas pontas, o próximo ano será um desastre.

Portanto, sua tarefa é determinar a soma da quantidade de pedidos de cada um para saber se vale a pena ir ao Réveillon de Copacabana ou se é melhor ficar em casa e assistir ao Show da Virada.

### Entrada
A entrada é composta por **T** (1 ≤ **T** ≤ 100) indicando a quantidade de casos de teste e então, **T** inteiros **N** (3 ≤ N ≤ 104), indicando a quantidade de pessoas. A mesa é retangular e haverá pelo menos e no máximo uma pessoa em uma das pontas, isto é, se uma ponta estiver vazia, a outra deve ser ocupada, ou senão, as duas pontas estarão ocupadas, mas o número de pessoas que não estão nas pontas sempre será par. O final da entrada é indicado por **T = 0**.

### Saída
Seu programa deverá imprimir a soma da quantidade de pedidos de cada pessoa. Não haverá linha em branco entre os casos de teste.
|Entrada|Saída|
|-|-|
|5|6|
|4|10|
|6|14|
|8|18|
|10|22|
|12||
|0||

---

## Desafio 08 - Pink e Cérebro
Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. Para passar o temp, Pink cria problemas matemáticos para Cérebro resolver, o último deles foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos de **2**, **3**, **4** e **5**?

Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos.

Ajude Cérebro a resolver o desadio de Pink.

### Entrada
A primeira linha da entrada consiste em um inteiro **N** (1 ≤ **N** ≤1000), representando a quantidade de números na lista de Pink.

A segunda linha contém **N** inteiros Li (1 ≤ **Li** ≤ 100), representando os números da lista de Pink.

### Saída
Imprima a quantidade de números múltiplos de **2**, **3**, **4** e **5** presentes na lista. Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.
|Entrada|Saída|
|-|-|
|5 <br> 2 5 4 20 10|4 Multiplo(s) de 2 <br> 0 Multiplo(s) de 3 <br> 2 Multiplo(s) de 4 <br> 3 Multiplo(s) de 5|

---

## Desafio 09 - Quadrado e ao Cubo
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

### Entrada
O arquivo de entrada contém um número inteiro positivo N.

### Saída
Imprima a saída conforme o exemplo fornecido.

|Entrada|Saída|
|-|-|
|5|1 1 1 <br> 2 4 8 <br> 3 9 27 <br> 4 16 64 <br> 5 25 125|