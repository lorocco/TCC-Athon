# 🏅 Athon - Plataforma de Conexão entre Atletas e Patrocinadores

Athon é uma plataforma web desenvolvida como Trabalho de Conclusão de Curso (TCC) para o curso de Informática para Negócios da FATEC São Bernardo do Campo. O principal objetivo do projeto é criar uma ponte entre atletas amadores e potenciais patrocinadores, fomentando oportunidades de apoio e visibilidade na comunidade esportiva.

---

## 📌 Visão Geral

A aplicação foi arquitetada com uma clara separação de responsabilidades entre a interface do usuário e a lógica do servidor:

-   **Frontend**: Uma interface web responsiva e dinâmica, construída com HTML, CSS e JavaScript puros (vanilla). O frontend é estruturado em módulos para controladores, views, helpers e serviços, garantindo manutenibilidade e escalabilidade.
-   **Backend**: Uma API RESTful robusta, desenvolvida com Node.js e o framework Express. Ela gerencia toda a lógica de negócios, persistência de dados e autenticação de usuários, comunicando-se com um banco de dados MariaDB.

---

## 🚀 Principais Funcionalidades

A plataforma está equipada com diversas funcionalidades projetadas para facilitar conexões significativas entre atletas e patrocinadores:

-   [x] **Gerenciamento de Usuários**: Cadastro e login seguros para atletas e patrocinadores.
-   [x] **Personalização de Perfil**: Usuários podem fazer upload de imagens para personalizar seus perfis e publicações.
-   [x] **Criação de Conteúdo**: Atletas podem criar posts com texto e imagens para mostrar sua jornada e conquistas.
-   [x] **Sistema de Engajamento**: Uma funcionalidade de "curtir" permite que os usuários demonstrem apoio e interesse nos perfis e posts uns dos outros.
-   [x] **Filtros Avançados**: Um sistema de busca e filtragem para encontrar usuários com base no esporte, gênero e função (atleta ou patrocinador).
-   [x] **Autenticação Segura**: Rotas protegidas usando JSON Web Tokens (JWT) para garantir que apenas usuários autenticados possam acessar dados e funcionalidades sensíveis.

---

## 🔧 Tecnologias Utilizadas

Este projeto utiliza uma pilha de tecnologias moderna e eficaz:

| Categoria     | Tecnologia                                                                                                                              |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **🖥️ Frontend** | `HTML5`, `CSS3`, `JavaScript (ES6 Modules)`                                                                                             |
| **🛠️ Backend** | `Node.js`, `Express`, `MariaDB`, `Sequelize`, `JWT`, `Multer`, `dotenv`, `CORS`                                                           |
| **📦 Outros** | `nodemon` para desenvolvimento, `Sequelize-CLI` para migrações de banco de dados.                                                       |

---

## 📁 Estrutura do Projeto

O projeto está organizado em dois diretórios principais, `TCC-FATEC-Frontend-main` e `TCC_BACKEND-main`, refletindo a separação entre o frontend e o backend.

```
📦 diretório-raiz
├── TCC-FATEC-Frontend-main
│   ├── controller/      # Gerencia as interações do usuário e a lógica da aplicação
│   ├── helpers/         # Fornece funções auxiliares (ex: cookies, likes)
│   ├── sevice/          # Gerencia as requisições à API e a busca de dados
│   └── view/            # Contém todas as páginas HTML e estilos CSS
├── TCC_BACKEND-main
│   ├── api/             # Núcleo da aplicação backend
│   │   ├── controllers/ # Define a lógica para lidar com as requisições
│   │   ├── migrations/  # Gerencia as alterações no esquema do banco de dados
│   │   ├── models/      # Define o esquema do banco de dados e seus relacionamentos
│   │   └── routes/      # Define os endpoints da API
│   ├── public/
│   ├── .env.example     # Exemplo para as variáveis de ambiente
│   └── package.json
└── README.md
```

---

## 🛠️ Instalação e Execução Local

Para executar este projeto localmente, você precisará ter o Node.js, Git e uma instância do banco de dados MariaDB (ou MySQL) instalada e configurada.

### Configuração do Backend

1.  **Navegue até o diretório do backend:**
    ```bash
    cd TCC_BACKEND-main
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` copiando o `example.env` e preenchendo com suas credenciais do banco de dados e outras configurações necessárias.
    ```bash
    cp example.env .env
    ```

4.  **Inicie o servidor backend:**
    ```bash
    npm start
    ```
    O servidor será executado na porta especificada no seu arquivo `.env` (o padrão é 3000).

### Configuração do Frontend

O frontend é uma aplicação do lado do cliente e pode ser executado simplesmente abrindo os arquivos HTML em um navegador.

1.  **Abra a página principal:**
    Navegue até o diretório `TCC-FATEC-Frontend-main/view/` e abra o arquivo `index.html` no seu navegador de preferência.

---

## 👤 Autor

**Lorenzo Rocco Brasil**

-   📧 lorenzorbrasil@gmail.com
-   📚 FATEC São Bernardo do Campo – Informática para Negócios
-   💼 Desenvolvedor | Estudante de ADS

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.
