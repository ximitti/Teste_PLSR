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

ORM encapsula a interação entre o sistema e o banco de dados usando classes para modelar a tabela, o acesso também fica encapsulado em métodos removendo a necessidade de escrever queries com SQL puro.

- Vantagens:

    Não precisa saber SQL para conseguir usar.
    Mapeia os dados de forma automática.
    Pode ajudar com a segurança evitando injeção de SQL.
    Normaliza as consultas para diferentes base de dados.

- Desvantagens:

    Pode limitar as formas com que as consultas podem ser feitas.
    Pode limitar a performance, caso execute ações desnecessárias.
    Não precisa saber SQL, pode ser uma desvantagem deixar de conhecer alguma coisa que pode ser usado em outro momento.

### Query builder:

Query builder permite a utilização de SQL no sistema que o utiliza, permite mais flexibilidade na interação sistema / banco de dados.

- Vantagens:

    Permite escrever queries mais detalhadas e personalizadas.
    Ajuda a desenvolver o conhecimento de SQL.
    Pode ajudar com a segurança evitando injeção de SQL no banco de dados.
    Normaliza as consultas para diferentes base de dados.

- Desvantagens:
    Precisa de conhecimento em SQL.

## 6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.

``` sql
SELECT DISTINCT j1.nome , j2.nome 
FROM partidas AS p
INNER JOIN jogador AS j1 ON p.jogador1_id = j1.id
INNER JOIN jogador AS j2 ON p.jogador2_id = j2.id
WHERE duracao > 90 AND (pontos_jogador1 + pontos_jogador2 > 30);
```