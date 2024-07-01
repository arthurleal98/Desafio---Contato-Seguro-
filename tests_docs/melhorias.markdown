# Melhorias sugeridas

No front-end temos que fazer ajustes em alguns campos



1. No campo "Email" deve ser aceito apenas emails como formato "username@domain.com", além disso, o campo tem obrigariedade de preenchimento.

2. No campo "Telefone" deve apenas comportar números, deve comportar o formato padrão e obrigatoriamente deve ser preenchido. Ex: "+55 83 91823-2738".

3. O campo "Cidade de nascimento" deve comportar apenas strings alfabéticas, apenas com letras e espaços. Se possível, ter um verificador de cidades, para apenas incluir cidades reais.

4. O campo "Data de Nascimento" precisa de um limitador, colocando limitador considerando anos reais. Considerando um limitador de 120 anos a menos do ano atual, e limitando o ano para o ano atual.

5. O campo "Empresas", pode compor a adição de empresas além das disponíveis, sendo um campo obrigatorio.

6. Adicionar um limitador de entrada nos campos

7. A vizualização da lista de usuarios se torna dificil quando temos nomes muito grande, tendo uma necessidade de quebra de linha nos elementos da tabela.

8. Ao clicar no botão de excluir, poderia aparecer um modal para a confirmac`ção da exlcusao do usuário. Para evitar possiveis exlusões sem inteção.

9. Adicionar função ao botão de editar o usuário escolhido.

10. No banco de dados deve ser adicionado o "ON DELETE CASCADE" na chave estrangeira "id_user" na tabela "user_company". Para que quando seja solicitado uma exclusao, ela seja feita sem nenhum problema, já que ;o problema ocorre devido ao impedimento de exlucsao por esse motivo

11. Filtros de ordenação na lista de usuários

12. No modal de cadastro, o campo de data deve informar "Data de Nascimento" dentro do campo de entrada.
