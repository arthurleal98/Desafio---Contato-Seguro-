# Bugs Encontrados


## BUG_001 - Exclusão de usuário não funcionando

O sistema mostra a exclusão na interface de usuário, porém, o usuário alvo continua salvo.

### Requisitos

* Estar com o ambiente em funcionamento
* Ter ao menos um usuário cadastrado

### Passos para reprodução

1. Entrar no link "http://localhost:5400/"
2. Clicar no simbolo de lixeira do primeiro elemento da tabela.
3. Aguardar a mensagem de "Sucesso".
4. Verificar na tabela que não foi realizada a exclusão.

### Evidência

<video controls src="20240629-1906-14.4441324.mp4" title="Title"></video>
---

## BUG_002 - Botão de editar não tem funcionalidade

Quando clicamos no botão de editar os dados do usuário nada acontece.

### Requisitos

* Estar com o ambiente em funcionamento
* Ter ao menos um usuário cadastrado

### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar no simbolo de editar do primeiro elemento da tabela.
3. Esperar abrir o modal de edição

### Evidência
<video controls src="20240629-1912-11.5576998.mp4" title="Title"></video>


## BUG_003 - Tabela não responsiva com dados grandes

A tabela não apresenta quebra de linha nas suas linhas, o que prejudica a interface do usuário.
### Requisitos

* Estar com o ambiente em funcionamento


### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar em "+ Novo Usuário".
3. Preencher o campo "Nome" com "testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste".
4. Prencher o campo "Email" com "testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste@teste.com".
5. Preencher o campo "Telefone" com "5583912341234".
6. Preencher o campo "Cidade de nascimento" com "testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste".
7. Preencher o campo de data com 01/12/2024.
8. No campo de "Empresa" selecionar a primeira empresa disponivel.
9. Clicar em "Salvar".
10. Vizualizar a estrutura da tabela.

### Evidências
<video controls src="20240629-1930-07.3393670.mp4" title="Title"></video>

## BUG_004 - O campo "Email" do cadastro de novo usuário aceita qualquer valor não nulo de entrada

Quando criamos um novo usuário, o campo de entrada "Email" aceita qualquer entrada não nula e de formato diferente de um email.

### Requisitos

* Estar com o ambiente em funcionamento


### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar em "+ Novo Usuário".
3. Preencher o campo "Nome" com "teste".
4. Prencher o campo "Email" com "1".
5. Preencher o campo "Telefone" com "5583912341234".
6. Preencher o campo "Cidade de nascimento" com "São Paulo".
7. Preencher o campo de data com 01/12/2024.
8. No campo de "Empresa" selecionar a primeira empresa disponivel.
9. Clicar em "Salvar".
10. Verificar que o usuário foi criado com sucesso.

### Evidência
![alt text](image-2.png)

## BUG_005 - O campo "Nome" do cadastro de novo usuário aceita qualquer valor não nulo de entrada

Quando criamos um novo usuário, o campo de entrada "Nome" aceita qualquer entrada não nula. O formato suporta qualquer caracter, seja alfabetico ou simbolo.

### Requisitos

* Estar com o ambiente em funcionamento


### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar em "+ Novo Usuário".
3. Preencher o campo "Nome" com "? ".
4. Prencher o campo "Email" com "? ".
5. Preencher o campo "Telefone" com "? ".
6. Preencher o campo "Cidade de nascimento" com "? ".
7. Preencher o campo de data com 11/12/213.
8. No campo de "Empresa" selecionar a primeira empresa disponivel.
9. Clicar em "Salvar".
10. Verificar que o usuário foi criado com sucesso.

### Evidência
![alt text](image-3.png)

## BUG_006 - O campo "Telefone" do cadastro de novo usuário aceita qualquer valor não nulo de entrada

Quando criamos um novo usuário, o campo de entrada "Telefone" aceita qualquer entrada não nula. O formato suporta qualquer caracter, seja alfabetico ou simbolo.

### Requisitos

* Estar com o ambiente em funcionamento


### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar em "+ Novo Usuário".
3. Preencher o campo "Nome" com "? ".
4. Prencher o campo "Email" com "? ".
5. Preencher o campo "Telefone" com "? ".
6. Preencher o campo "Cidade de nascimento" com "? ".
7. Preencher o campo de data com 11/12/213.
8. No campo de "Empresa" selecionar a primeira empresa disponivel.
9. Clicar em "Salvar".
10. Verificar que o usuário foi criado com sucesso.

### Evidência
![alt text](image-3.png)

## BUG_007 - O campo "Cidade de Nascimento" do cadastro de novo usuário aceita qualquer valor não nulo de entrada

Quando criamos um novo usuário, o campo de entrada "Cidade de Nascimento" aceita qualquer entrada não nula. O formato suporta qualquer caracter, seja alfabetico ou simbolo.

### Requisitos

* Estar com o ambiente em funcionamento


### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar em "+ Novo Usuário".
3. Preencher o campo "Nome" com "? ".
4. Prencher o campo "Email" com "? ".
5. Preencher o campo "Telefone" com "? ".
6. Preencher o campo "Cidade de nascimento" com "? ".
7. Preencher o campo de data com 11/12/213.
8. No campo de "Empresa" selecionar a primeira empresa disponivel.
9. Clicar em "Salvar".
10. Verificar que o usuário foi criado com sucesso.

### Evidência
![alt text](image-3.png)

## BUG_007 - O campo de data do cadastro de novo usuário aceita valores não reais

Quando criamos um novo usuário, o campo de entrada de data aceita valores não reais.

### Requisitos

* Estar com o ambiente em funcionamento


### Passos para reprodução

1. Entrar no link "http://localhost:5400/".
2. Clicar em "+ Novo Usuário".
3. Preencher o campo "Nome" com "? ".
4. Prencher o campo "Email" com "? ".
5. Preencher o campo "Telefone" com "? ".
6. Preencher o campo "Cidade de nascimento" com "? ".
7. Preencher o campo de data com 11/12/213.
8. No campo de "Empresa" selecionar a primeira empresa disponivel.
9. Clicar em "Salvar".
10. Verificar que o usuário foi criado com sucesso.

### Evidência
![alt text](image-3.png)