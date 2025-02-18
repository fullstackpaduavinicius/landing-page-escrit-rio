# Landing Page - Escritório

Este projeto é uma **landing page** interativa e responsiva, desenvolvida utilizando **React.js** no frontend e **Node.js/Express** no backend, com integração ao **MongoDB** para armazenamento de dados. A página é projetada para ser rápida, eficiente e atraente, utilizando bibliotecas modernas como **Tailwind CSS** para estilização e **Framer Motion** para animações.

## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework minimalista para construção de APIs e servidores HTTP.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando a interação com o banco de dados.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre origens (Cross-Origin Resource Sharing).
- **dotenv**: Gerenciamento de variáveis de ambiente para a configuração do projeto.

### Frontend

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e interativas.
- **Vite**: Ferramenta de build rápida e moderna para projetos frontend.
- **Tailwind CSS**: Framework CSS utilitário para criar designs responsivos de forma rápida e eficiente.
- **Framer Motion**: Biblioteca para animações fluidas e interativas no React.
- **Swiper**: Biblioteca para implementar carrosséis e slides interativos.

## Estrutura do Projeto

O projeto está dividido em duas partes principais: o backend e o frontend.

### Backend

1. **Arquivos principais**:
   - `index.js`: Arquivo de entrada do servidor.
   - `config/database.js`: Configuração de conexão com o banco de dados MongoDB.
   - `controllers/`: Contém os controladores que gerenciam as requisições.
   - `middleware/`: Contém middlewares, como autenticação.
   - `models/`: Contém os modelos de dados para MongoDB, como `User.js` e `Transaction.js`.
   - `routes/`: Contém as rotas para o servidor Express.
   - `.env`: Variáveis de ambiente para a configuração do servidor, como URL do banco de dados.

2. **Dependências**:
   - `express`, `mongoose`, `cors`, `dotenv`.

### Frontend

1. **Arquivos principais**:
   - `src/App.js`: Componente principal que renderiza a estrutura da página.
   - `src/components/`: Componentes reutilizáveis, como `Navbar.js`, `Dashboard.js`, `TransactionHistory.js`, etc.
   - `src/pages/`: Páginas como `Home.js`, `Profile.js`.
   - `src/styles/main.css`: Arquivo de estilo principal, incluindo configurações do Tailwind CSS.
   - `src/services/api.js`: Arquivo de configuração para chamadas de API.

2. **Dependências**:
   - `react`, `react-dom`, `tailwindcss`, `swiper`, `framer-motion`, `vite`.

## Instalação

### Backend

1. Clone o repositório:

   git clone https://github.com/fullstackpaduavinicius/landing-page-escrit-rio.git

2. Navegue até a pasta do backend:
   cd backend
   
3. Instale as dependências:
   npm install

4. Crie um arquivo ".env" na raiz do diretório e adicione suas variáveis de ambiente (como a URL do banco de dados MongoDB):
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000

5. Inicie o servidor backend:
   npm start 

### Frontend

1. Navegue até a pasta do frontend:
   cd frontend

2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
   npm run dev
Isso iniciará o frontend no http://localhost:3000.


### Funcionalidades
Landing Page Responsiva: Design responsivo para todos os tipos de dispositivos.
Animações: Animações interativas e fluidas usando Framer Motion.
Integração com MongoDB: O backend está integrado com MongoDB para gerenciamento de dados.
Interface Modernizada: Utilização de Tailwind CSS para um design limpo e moderno.

### Scripts
npm run dev: Inicia o servidor de desenvolvimento para o frontend (Vite).
npm run build: Cria uma versão otimizada para produção do frontend.
npm run serve: Serve a versão de produção otimizada do frontend.

### Contribuição
Se você quiser contribuir para o desenvolvimento deste projeto, siga os seguintes passos:

Faça um fork deste repositório.
Crie uma branch para sua feature <br/> (git checkout -b feature/nova-feature). <br/>
Faça as alterações desejadas e commit-as <br/> (git commit -am 'Adicionando nova feature').<br/>
Envie suas alterações<br/> (git push origin feature/nova-feature).<br/>
Abra um Pull Request. 


### Contato
Para mais informações, entre em contato com o desenvolvedor:

Linkedin: https://www.linkedin.com/in/ivan-vinicius-de-padua/
Email: fullstackpaduavinicius@gmail.com
Render: https://landing-page-escritorio.onrender.com/
