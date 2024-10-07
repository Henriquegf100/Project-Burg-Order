# 🍔 Pedido de Hambúrguer - Aplicação Full Stack 🚀

![Burger App](https://cdn.icon-icons.com/icons2/3512/PNG/48/order_food_delivery_burger_icon_221032.png)  **Aplicação de Pedidos de Hambúrguer**: Um sistema simples de gestão de pedidos para restaurantes fast-food.

---

## 📋 Descrição

Essa aplicação foi desenvolvida como um sistema de pedidos para clientes em um restaurante de fast-food. A interface permite ao usuário registrar novos pedidos, listar todos os pedidos feitos e excluir pedidos quando necessário.

---

## 🛠️ Tecnologias Utilizadas

As principais tecnologias utilizadas no projeto são:

- **React.js** ![React Icon](https://img.icons8.com/color/48/000000/react-native.png)  
  Para a criação da interface de usuário.
  
- **Axios** ![Axios Icon](https://cdn.icon-icons.com/icons2/2699/PNG/48/axios_logo_icon_168546.png)  
  Para a comunicação com o backend via HTTP.
  
- **Node.js** ![Node.js Icon](https://img.icons8.com/color/48/000000/nodejs.png)  
  No backend, gerencia a comunicação com o banco de dados.
  
- **Express.js** ![Express Icon](https://img.icons8.com/color/48/000000/express.png)  
  Framework para criação de APIs no backend.
  
- **MongoDB** ![MongoDB Icon](https://img.icons8.com/color/48/000000/mongodb.png)  
  Banco de dados NoSQL utilizado para armazenar os pedidos.

---

## 💻 Funcionalidades

1. **Criar Pedido**  
   O usuário pode adicionar um novo pedido, informando o nome do cliente e a descrição do pedido (ex: "1 Coca-Cola, 1 X-Salada").
   
2. **Visualizar Pedidos**  
   Todos os pedidos feitos são listados na página de pedidos. O nome do cliente e os itens do pedido são exibidos.
   
3. **Deletar Pedido**  
   O usuário pode deletar um pedido ao clicar no ícone de lixeira ao lado do pedido.

---

## 🚦 Rotas da Aplicação

### Página Inicial (`/`)
- **Objetivo**: Permitir ao usuário criar novos pedidos.
- **Componentes**:
  - Formulário com dois campos de input:
    - **Nome do Cliente**: Nome de quem está fazendo o pedido.
    - **Pedido**: Detalhes do pedido (ex.: "1 X-Salada, 1 Coca-Cola").
  - **Botão "Novo Pedido"**: Salva o pedido no banco de dados e redireciona para a página de listagem.

### Página de Pedidos (`/Orders`)
- **Objetivo**: Exibir todos os pedidos feitos.
- **Componentes**:
  - Lista de pedidos com o nome do cliente e detalhes do pedido.
  - Botão de **Excluir Pedido** ao lado de cada item.
  - **Botão "Voltar"** para retornar à página inicial.

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB rodando localmente ou em um servidor

### Passos para rodar o projeto:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2.  Instale as dependências: npm install

3.  Inicie o servidor backend: npm start

4.  Inicie o cliente frontend: npm run dev

5.  Acesse a aplicação no navegador em http://localhost:5173.

  📑 Contribuição

Sinta-se à vontade para enviar issues e pull requests! Toda ajuda será muito bem-vinda. 😃   

  🧑‍💻 Autor
Henrique Gualberto

  [LinkedIn](https://www.linkedin.com/in/henrique-g-407648127/) | [GitHub](https://github.com/Henriquegf100)



