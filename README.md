
# 🏅 Plataforma de Conexão entre Atletas e Patrocinadores

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso na FATEC São Bernardo do Campo, no curso de **Informática para Negócios**. A plataforma tem como objetivo **conectar atletas amadores com possíveis patrocinadores**, facilitando oportunidades de apoio e visibilidade.

---

## 📌 Visão Geral

A aplicação é composta por duas partes:

- **Frontend:** Interface web desenvolvida com HTML, CSS e JavaScript puro.
- **Backend:** API REST desenvolvida em Node.js com Express, utilizando banco de dados MariaDB.

---

## 🔧 Tecnologias Utilizadas

### 🖥️ Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Estrutura modular com:
  - `controller`
  - `view`
  - `helpers`
  - `sevice` (serviços)

### 🛠️ Backend
- Node.js
- Express
- MariaDB
- JWT (JSON Web Token) para autenticação
- Multer (upload de imagens)
- Dotenv (variáveis de ambiente)
- CORS e Body-Parser

---

## 🚀 Funcionalidades

- [x] Cadastro e login de usuários (atletas e patrocinadores)
- [x] Upload de imagens para perfis e postagens
- [x] Criação de postagens com fotos
- [x] Sistema de curtidas entre perfis
- [x] Consulta e filtragem por esporte, gênero e função
- [x] Autenticação de rotas protegidas

---

## 📁 Estrutura do Projeto

```
📦 Projeto-TCC
├── TCC-FATEC-Frontend-main
│   ├── controller
│   ├── helpers
│   ├── sevice
│   └── view
├── TCC_BACKEND-main
│   ├── api
│   ├── public
│   ├── .env (exemplo: example.env)
│   └── package.json
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos:
- Node.js instalado
- Banco de dados MariaDB (ou MySQL) configurado
- Git

### Backend
```bash
cd TCC_BACKEND-main
npm install
cp example.env .env  # configure suas variáveis de ambiente
npm start
```

### Frontend
Basta abrir o arquivo `index.html` dentro da pasta `view` no navegador.

---

## 🧠 Objetivo do Projeto

O projeto visa ajudar atletas que enfrentam dificuldades para encontrar patrocínio, ao mesmo tempo em que oferece às empresas patrocinadoras um meio direto e eficiente de visualizar e apoiar talentos em diversos esportes.

---

## 👤 Autor

**Lorenzo Rocco Brasil**  
📧 lorenzorbrasil@gmail.com
📚 FATEC São Bernardo do Campo – Informática para Negócios  
💼 Desenvolvedor | Estudante de ADS

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.
