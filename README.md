# SOBRE O PROJETO
Este repositório replica um sistema de gerenciamento financeiro pessoal, e foi desenvolvido em React e TS.
O mockup utilizado foi criado no Figma pela desenvolvedora, os dados foram armazenados em um servidor falso em JS.

Toda a estilização foi feita utilizando Styled-components.

A tabela possui 3 tipos de filtros: Tipo de dado (Entrada/Saída), Conta bancária e Forma de Pagamento.
Todos os filtros são armazenados no React Reducer.

## MOCKUP
![Alt text](image.png)

## REQUISITOS
React = ^18.2.0, 
Typescript = ^4.9.5
Node = foi utilizado o 18.16.1

## LINGUAGEM, FRAMEWORK E BIBLIOTECA
#### Linguagem: Typescript
#### Biblioteca Principal: React

### BIBLIOTECAS
#### Estilização: Styled-components
#### Componentes de filtros: react-menu e downshift
#### Tabela: react-data-table-component


## COMO INICIAR
### 1. START O SERVIDOR FALSO
Execute `json-server --watch db.json` para a biblioteca subir o servidor falso a ser utilizado
### 2. START O REACT
Com o servidor no localhost, inicie o React com `npm start`.
