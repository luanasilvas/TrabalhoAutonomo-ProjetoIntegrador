Projeto de Divulgação de Trabalhos Autônomos

Este projeto é uma aplicação web voltada para a divulgação de trabalhos autônomos, desenvolvida como parte do curso de Desenvolvimento Full-Stack. A plataforma permite que autônomos cadastrem seus serviços e se conectem com potenciais clientes, facilitando a busca por oportunidades de trabalho.

⚙️ Funcionalidades

- Cadastro de Usuário: Permite que autônomos criem contas e gerenciem seus perfis.
- Listagem de Serviços: Autônomos podem cadastrar, editar e excluir serviços oferecidos.
- Portfólio escrito : Exibição descrições dos trabalhos realizados.
- Busca de Serviços: Usuários podem buscar serviços por categoria.

🔎 Tecnologias Utilizadas

Backend

- Node.js e Express: Utilizados para criar o servidor e as APIs.
- MySQL: Sistema de banco de dados relacional para armazenar dados de usuários e serviços.
- Sequelize: ORM para facilitar a interação com o banco de dados MySQL.
- bcrypt: Para segurança no armazenamento de senhas.
- JWT (jsonwebtoken): Usado para autenticação e autorização de usuários.

Frontend

- React: Biblioteca principal para a criação de interfaces dinâmicas.
- Material-UI: Biblioteca de componentes React para estilização e design responsivo.
- Axios: Para fazer requisições HTTP ao backend.
- React Router Dom: Gerenciamento de rotas no frontend.
- React Toastify: Para exibir notificações de feedback ao usuário.
- CSS Modules: Para estilização modular das componentes.

 📦 Instalação

 Pré-requisitos

- Node.js instalado.
- MySQL instalado e rodando.

 Passos

1. Clone este repositório:
``
   bash
   git clone https://github.com/seu-usuario/Projeto-Divulgacao-Trabalho-Autonômo.git
  `` 

2. Entre na pasta do projeto:
``
   bash
   cd Projeto-Divulgacao-Trabalho-Autonômo
  `` 

3. Abra um terminal para instalar as dependências e iniciar o servidor:

   bash
   ``
   npm install
   npm start
``
5. Configure o arquivo `.env` com suas credenciais de banco de dados e outras variáveis de ambiente:
`` 
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=admin
DB_NAME=autonomeu
NODE_ENV=development
``
💾 Uso

Acesse a aplicação em `http://localhost:5173` após iniciar o servidor. Utilize a interface para criar uma conta, listar seus serviços e conectar-se com clientes.

🔮 Próximos Passos

Os aprimoramentos futuros para o projeto incluem:

- Implementação de um sistema de mensagens entre autônomos e clientes.
- Melhorias na busca de serviços com filtros avançados.
- Criação de uma área de administração para gerenciar usuários e serviços.
- Desenvolvimento de uma versão mobile responsiva.
- Implementação das avaliações.
- Implementação de portfólio visual.

About

Projeto de divulgação de trabalhos autônomos.

Resources

- Readme
- Atividade
