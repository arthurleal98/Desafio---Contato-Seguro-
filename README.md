# Processo Seletivo - Analista de Testes JR


**Autor: Arthur Leal**

## Índice

1. [Descrição](#1-descrição)
2. [Configuração de ambiente](#configuração-de-ambiente)
3. [Testes em BDD com Gherkin](#testes-em-bdd-com-gherkin)
4. [Melhorias sugeridas](#melhorias-sugeridas)
5. [Bugs encontrados](#bugs-encontrados)
6. [Testes automatizados](#testes-automatizados)
7. [Testes de API com Postman](#testes-de-api-com-postman)

## 1. Descrição


Este documento tem como objetivo mostrar as habilidades e conhecimentos na área de QA.

Durante todo o texto, será possível identificar todo o percurso do projeto, além de todos os testes e configurações.

O documento apresenta as seguintes partes para a avaliação:

- Identificação e descrição de bugs
- Sinalização de melhorias
- Criação de casos de teste
- Testes automatizados

## 2. Configuração de ambiente


É necessário a instalação do Docker na máquina.

Preferencialmente, utilize alguma distribuição Linux para a configuração do ambiente e realização dos testes.

Para iniciar o projeto, descompacte o projeto enviado por e-mail e acesse a pasta raiz do projeto via terminal.

Dentro da pasta raiz do projeto você deve rodar o seguinte comando:`docker-compose up --build -d`


Após o comando ser rodado, você poderá acessar a aplicação pela URL: `http://localhost:5400`.

Outros endpoints que serão expostos ao subir o projeto:

- Banco de dados (MySQL): `port 3400`
- Backend (PHP): `port 8400`

O projeto pode demorar para ser inicializado.

Após executar pela primeira vez o comando acima, pode-se subir o ambiente local pelo seguinte comando: `docker-compose up -d`


Para a execução dos testes automatizados, execute `npx cypress open` para ter uma visualização mais abrangente ou `npx cypress run` para uma execução mais direta.

Para os testes de API, será necessário importar o arquivo no programa Postman. O arquivo de importação pode ser encontrado no diretório `tests_docs/api/Testes API.postman_collection.json`.

Os textos, documentos e mídia podem ser encontrados na pasta `tests_docs`.

Isso organiza o texto em seções e formatação adequada para ser lido como um documento Markdown.

## 3. Testes em BDD com Gherkin

* [Testes da API](tests_docs/api/casos_de_testes_api.feature)
* [Testes E2E](tests_docs/frontend/casos_de_testes_e2e.feature)
  
## 4. Melhorias sugeridas

* [Melhorias sugeridas](tests_docs/melhorias.markdown)

## 5. Bugs encontrados

* [Bugs encontrados](tests_docs/bugs.markdown)

## 6. Testes automatizados

* [Testes automatizados](cypress/e2e/contato_seguro.cy.js)

## 7. Testes de API com Postman

Basta importar no Postman e executar os testes

* [Postman.json](tests_docs/api/Testes%20API.postman_collection.json)
