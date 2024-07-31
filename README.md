![Programação-Desafio prático_ Sorteador ](https://github.com/user-attachments/assets/fe9a4bdb-1e9f-4141-bf57-3999fdc01412)

# Alura-Sorteador

Este projeto foi desenvolvido com base em um desafio proposto pela escola de tecnologia Alura, no qual foi fornecido parte do front-end de uma aplicação simples, para o desenvolvimento do back-end em 
JavaScript, a aplicação é um sorteador de números em um range determinado pelo usuário.
 

## 🔨 Funcionalidades do projeto

O uso da aplicação é intuitivo, ela sorteará a quantidade desejada de números pseudoaleatórios dentro de um escopo determinado pelo usuário, 
ressaltando que o escopo é determinado a partir de um número  mínimo e um máximo, os quais participam da possibilidade de escolha.
 
![Visualização](https://github.com/user-attachments/assets/39bbf9ee-fe99-4fca-9b35-beea28551635)


## ✔️ Técnicas e tecnologias utilizadas

**Gerar um número pseudo-aleatório**:

- `Gerar o número`: Foi utilizado o Math.random(), um método estático que retorna um número pseudoaleatório de ponto flutuante que é maior ou igual a 0 e menor que 1. Documentação completa em (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- `Limitar o escopo`: Para expandir e limitar o escopo de possíveis números sorteados, foi utilizado uma função escrita pelo desenvolvedor do projeto, que por motivos do caráter do projeto(desafio), preferiu desenvolver uma solução própria no lugar da função já existente e habitual, foi utilizado: parseInt(Math.random() * (maximum - minimum + 1)) + parseInt(minimum)

## 📁 Acesso ao projeto

**Repositório do projeto no GitHub (https://github.com/MateusHPC/Alura-Sorteador)**

## 🛠️ Abrir e rodar o projeto

**Após ter as pastas do projeto em seu computador, basta abrir o arquivo index com o navegador.**


