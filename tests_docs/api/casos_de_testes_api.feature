# language: pt
Funcionalidade: Home Route
    Cenário: Status code is 200
        Dado eu faço uma requisição GET para "/"
        Então o código de resposta deve ser 200
        
    Cenário: Response body is correct
        Dado eu faço uma requisição GET para "/"
        Então o corpo da resposta deve ser um JSON:
            """
           {"msg": "home"}
            """

    Cenário: Status code is 405
        Dado eu faço uma requisição POST para "/"
        Então o código de resposta deve ser 405

    Cenário: Response time is less than 200ms
        Dado eu faço uma requisição GET para "/"
        Então o tempo de resposta deve ser menor que 200ms


Funcionalidade: Obter Todos os Usuários

  Cenário: Verificar requisição GET para obter todos os usuários
    Dado que eu realizo uma requisição GET para "/api/user"
    Quando o código de resposta for 200
    Então a resposta deve ser uma lista de usuários

  Cenário: Validar estrutura dos elementos da lista de usuários
    Dado que eu realizo uma requisição GET para "/api/user"
    Quando o código de resposta for 200
    Então a resposta deve ser uma lista de usuários
    E cada usuário na lista deve conter os seguintes campos:
      | id_user     |
      | name        |
      | email       |
      | telephone   |
      | birth_date  |
      | birth_city  |
      | show        |
      | companies   |

  Cenário: Verificar código de resposta 400
    Dado que eu realizo uma requisição GET para "/api/user"
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar código de resposta 404
    Dado que eu realizo uma requisição GET para "/api/user"
    Quando o código de resposta for 404
    Então o código de resposta deve ser 404

Funcionalidade: Obter Usuário por ID

  Cenário: Obter usuário por ID existente
    Dado que eu realizo uma requisição GET para "/api/user/{id}"
    E o ID do usuário é existente
    Quando o código de resposta for 200
    Então a resposta deve conter os dados do usuário
    E a resposta deve ser JSON    
    E a resposta deve conter os campos:
        | id_user     |
        | name        |
        | email       |
        | telephone   |
        | birth_date  |
        | birth_city  |
        | show        |
        | companies   |

  Cenário: Verificar requisição com ID de usuário inexistente
    Dado que eu realizo uma requisição GET para "/api/user/{id}"
    E o ID do usuário não existe
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao obter usuário por ID
    Dado que eu realizo uma requisição GET para "/api/user/{id}"
    E ocorre um erro interno do servidor
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

Funcionalidade: Criar Usuário

  Cenário: Criar usuário com dados válidos
    Dado que eu realizo uma requisição POST para "/api/user/create"
    E o corpo da requisição contém:
      """
      {
          "name": "Teste",
          "e-mail": "teste@teste.com",
          "companies": ["Empresa A"]
      }
      """
    Quando o código de resposta for 201
    Então a resposta deve conter os dados do usuário
      E a resposta deve ser JSON
      E a propriedade "name" deve ser "Teste"
      E a propriedade "email" deve ser "teste@teste.com"
      E a propriedade "companies" deve ser uma lista contendo "Empresa A"

  Cenário: Verificar requisição com dados inválidos
    Dado que eu realizo uma requisição POST para "/api/user/create"
    E o corpo da requisição contém dados inválidos
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao criar usuário
    Dado que eu realizo uma requisição POST para "/api/user/create"
    E ocorre um erro interno do servidor
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

Funcionalidade: Atualizar Usuário

  Cenário: Atualizar usuário com dados válidos
    Dado que eu realizo uma requisição PATCH para "/api/user/{id}/update"
    E o corpo da requisição contém:
      """
      {
          "name": "Novo Nome",
          "e-mail": "novoemail@teste.com",
          "companies": ["Nova Empresa"]
      }
      """
    Quando o código de resposta for 200
    Então a resposta deve conter os dados do usuário atualizados
      E a resposta deve ser JSON
      E a propriedade "name" deve ser "Novo Nome"
      E a propriedade "email" deve ser "novoemail@teste.com"
      E a propriedade "companies" deve ser uma lista contendo "Nova Empresa"

  Cenário: Verificar requisição com dados inválidos
    Dado que eu realizo uma requisição PATCH para "/api/user/{id}/update"
    E o corpo da requisição contém dados inválidos
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao atualizar usuário
    Dado que eu realizo uma requisição PATCH para "/api/user/{id}/update"
    E ocorre um erro interno do servidor
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

Funcionalidade: Deletar Usuário

  Cenário: Deletar usuário com ID existente
    Dado que eu realizo uma requisição DELETE para "/api/user/{id}/delete"
    Quando o código de resposta for 200
    Então a resposta deve conter a confirmação de deleção
      E a resposta deve incluir o texto "Usuário deletado com sucesso"

  Cenário: Verificar requisição com ID de usuário inexistente
    Dado que eu realizo uma requisição DELETE para "/api/user/{id}/delete"
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao deletar usuário
    Dado que eu realizo uma requisição DELETE para "/api/user/{id}/delete"
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

Funcionalidade: Obter Todas as Empresas

  Cenário: Obter lista de todas as empresas
    Dado que eu realizo uma requisição GET para "/api/company"
    Quando o código de resposta for 200
    Então a resposta deve ser uma lista de empresas

  Cenário: Verificar resposta vazia quando não há empresas retornadas
    Dado que eu realizo uma requisição GET para "/api/company"
    Quando o código de resposta for 200
    Então a resposta deve ser uma lista vazia

  Cenário: Verificar erro interno do servidor ao obter todas as empresas
    Dado que eu realizo uma requisição GET para "/api/company"
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

  Cenário: Verificar estrutura da resposta das empresas
    Dado que eu realizo uma requisição GET para "/api/company"
    Quando o código de resposta for 200
    Então a resposta deve conter uma estrutura correta para cada empresa na lista
      E cada empresa deve conter um "id_company" do tipo string
      E cada empresa deve conter um "name" do tipo string
      E cada empresa deve conter um "cnpj" do tipo string
      E cada empresa deve conter um "show" do tipo string
      E cada empresa deve conter um "id_adress" do tipo string
      E cada empresa deve conter um "cep" do tipo string
      E cada empresa deve conter um "country" do tipo string
      E cada empresa deve conter um "state" do tipo string
      E cada empresa deve conter um "city" do tipo string
      E cada empresa deve conter um "street" do tipo string
      E cada empresa deve conter um "number" do tipo string
      E cada empresa deve conter um "district" do tipo string
      E cada empresa pode conter um "additional", que pode ser uma string ou null
      E cada empresa pode conter um "users", que pode ser uma string ou null


Funcionalidade: Obter Empresa por ID

  Cenário: Obter empresa por ID existente
    Dado que eu realizo uma requisição GET para "/api/company/{id}"
    Quando o código de resposta for 200
    Então a resposta deve ser JSON
      E a resposta deve conter uma estrutura correta para a empresa
      | Propriedade    | Tipo    |
      | id_company     | string  |
      | name           | string  |
      | cnpj           | string  |
      | show           | string  |
      | id_adress      | string  |
      | cep            | string  |
      | country        | string  |
      | state          | string  |
      | city           | string  |
      | street         | string  |
      | number         | string  |
      | district       | string  |
      | additional     | string ou null |
      | users          | string ou null |

  Cenário: Verificar requisição com ID de empresa inexistente
    Dado que eu realizo uma requisição GET para "/api/company/{id}"
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao obter empresa por ID
    Dado que eu realizo uma requisição GET para "/api/company/{id}"
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

Funcionalidade: Criar Empresa

  Cenário: Criar empresa com dados válidos
    Dado que eu realizo uma requisição POST para "/api/company/create"
    E o corpo da requisição contém:
      """
      {
          "name": "Empresa Teste",
          "cnpj": "12345678000195",
          "adress": {
              "cep": "12345-678",
              "country": "Brasil",
              "city": "São Paulo",
              "street_location": "Rua Teste",
              "number": "123",
              "district": "Centro"
          }
      }
      """
    Quando o código de resposta for 201
    Então a resposta deve ser JSON
    E a resposta deve conter uma estrutura correta para a empresa
      | Propriedade        | Tipo    |
      | id_company         | string  |
      | name               | string  |
      | cnpj               | string  |
      | adress             | object  |
      | cep                | string  |
      | country            | string  |
      | city               | string  |
      | street_location    | string  |
      | number             | string  |
      | district           | string  |

  Cenário: Verificar requisição com dados inválidos
    Dado que eu realizo uma requisição POST para "/api/company/create"
    E o corpo da requisição contém dados inválidos
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao criar empresa
    Dado que eu realizo uma requisição POST para "/api/company/create"
    E ocorre um erro interno do servidor
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500

Funcionalidade: Atualizar Empresa

  Cenário: Atualizar empresa com dados válidos
    Dado que eu realizo uma requisição PATCH para "/api/company/{id}/update"
    E o ID da empresa é "{id}"
    E o corpo da requisição contém:
      """
      {
          "name": "Nova Empresa",
          "cnpj": "98765432000199",
          "adress": {
              "cep": "54321-876",
              "country": "Brasil",
              "state": "São Paulo",
              "city": "São Paulo",
              "street": "Nova Rua",
              "number": "456",
              "district": "Centro"
          }
      }
      """
    Quando o código de resposta for 200
    Então a resposta deve ser JSON
    E a resposta deve conter uma estrutura correta para a empresa
      | Propriedade        | Tipo    |
      | id_company         | string  |
      | name               | string  |
      | cnpj               | string  |
      | adress             | object  |
      | cep                | string  |
      | country            | string  |
      | state              | string  |
      | city               | string  |
      | street             | string  |
      | number             | string  |
      | district           | string  |

  Cenário: Verificar requisição com dados inválidos
    Dado que eu realizo uma requisição PATCH para "/api/company/{id}/update"
    E o ID da empresa é "{id}"
    E o corpo da requisição contém dados inválidos
    Quando o código de resposta for 400
    Então o código de resposta deve ser 400

  Cenário: Verificar erro interno do servidor ao atualizar empresa
    Dado que eu realizo uma requisição PATCH para "/api/company/{id}/update"
    E o ID da empresa é "{id}"
    E ocorre um erro interno do servidor
    Quando o código de resposta for 500
    Então o código de resposta deve ser 500



