# Respostas do teste técnico

## 1. Qual a saída do algoritmo?
A saída do algoritmo é uma lista de números primos tabelados e paginados, cada página com 4 colunas de 50 linhas.

## 2. Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código.
O código não está limpo.
- Não segue o padrão de declaração de variáveis.
- Nomes de variáveis pouco intuitivos, complicado de entender o significado.
- Nome da classe não deixa claro o propósito dela.
- O código pode ser modularizado em funções para melhorar a legibilidade e manutenção.
- Quantidade de loops aninhados, apesar de terem mecanismos que evitam percorrer a lista de forma linear.

## 4. Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.
No Express.js, os middlewares são processos intermediários executados durante a chamada de uma rota da API, onde podem ser tratados dados da requisição (informações do body ou query params, por exemplo), autenticações e outras necessidades.\
Para evitar repetição de código na utilização de middleware pode-se isolar esse código que se repete em uma função que receba os parâmetros necessários ao middleware (req, res, next) e fazer a chamada da função nos pontos onde havia a repetição de código.

## 5. Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?
### ORM:
- Vantagens:
- Desvantagens:

### Query builder:
- Vantagens:
- Desvantagens:

## 6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.