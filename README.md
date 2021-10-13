## Boas vindas ao repositório do Projeto Bagy!
Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀

## Instruções para a instalação do projeto:
1. Crie uma pasta para onde o projeto será clonado. Ex: Projeto-Infracommerce

2. Clone o repositório
  * `git clone git@github.com:hleoc/Projeto-Bagy.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-Bagy`

3. Instale as dependências
  * `npm install`

4. Inicializar o servidor Node
  * `npm start`

## O que foi desenvolvido no back-end
Foi desenvolvida uma API utilizando a arquitetura GraphQL!

- Funcionalidades:
	- cadastrar novos clientes
	- cadastrar novos produtos
  - cadastrar novas vendas/pedidos

- Os clientes devem possuir os detalhes:
	- Nome
	- email
	- cpf
	- dataNasc
  - rua
	- numero
	- bairro
	- cidade
	- estado
  - pais
	- cep
	
- Os produtos devem possuir os detalhes:
	- nome
	- urlImagem
	- descricao
	- peso
	- preco
  - quantidadeEstoque

- As vendas/pedidos devem possuir os detalhes:
	- id_produto
	- dataPedido
	- parcelas
	- id_comprador
	- status

- O projeto está rodando na porta 4000 no back-end.

### Data de Entrega
O projeto tem até a seguinte data para ser entregue: `13/10/2021 as 20:00 horas`.


## Requisitos Obrigatórios:
- Montar todo o backend para esse sistema, usando API GraphQL, NodeJS, JavaScript e SQLite para persistir os dados.


## Tecnologias utilizadas
VSCode
API GraphQL
NodeJS
JavaScript
SQLite
DBeaver
Apollographql
Git/Github


## Melhorias Futuras
- Criar a documentação do projeto com Swagger;
- Adicionar testes unitários;
- Criar serviço de mensageria para enviar uma email para o comprador com as informações de compra;
