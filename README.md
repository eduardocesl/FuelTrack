# <img src=https://github.com/user-attachments/assets/ab9fa7e2-4361-4ab3-bdb9-2cbec737cdda height = 60>

**FuelTrack**: Aplicação para controle de abastecimentos e acompanhamento de custos veiculares.

<div align='center'>
<img src=https://github.com/user-attachments/assets/ab9fa7e2-4361-4ab3-bdb9-2cbec737cdda height = 200>
</div>


**Por:** Eduardo Lima.

## Sobre o projeto

O FuelTrack é uma aplicação desenvolvida com o objetivo de registrar abastecimentos de veículos e acompanhar informações como consumo médio, histórico de abastecimentos e estatísticas de utilização.

Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento Full Stack, com foco na construção de uma API REST utilizando Node.js e Express, seguindo uma arquitetura organizada em camadas (Controllers, Services, Repositories e Middlewares).

O objetivo é evoluir o projeto até uma aplicação completa, composta por backend e frontend em React.

## Tecnologias utilizadas

### Backend

* Node.js
* Express.js
* JavaScript
* Joi (validação de dados)

### Armazenamento

* Arquivos JSON (persistência local dos dados)

### Ferramentas

* Git
* GitHub
* Flashpost


## Funcionalidades

### Veículos

* Cadastro de veículos
* Consulta de veículos cadastrados
* Atualização de informações dos veículos
* Remoção de veículos
* Consulta de abastecimentos vinculados ao veículo

### Abastecimentos

* Cadastro de abastecimentos
* Consulta de histórico de abastecimentos
* Atualização de registros
* Remoção de abastecimentos
* Consulta de tipos de combustível disponíveis

### Análises e estatísticas

* Cálculo de consumo médio (km/L)
* Estatísticas gerais de abastecimento
* Dashboard com informações consolidadas do veículo
* Validação de quilometragem dos abastecimentos



## Como executar o projeto

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

* Node.js
* npm

### Clonando o repositório

```bash
git clone <https://github.com/eduardocesl/FuelTrack.git>
```

Acesse a pasta do backend:

```bash
cd FuelTrack/backend
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm start
```

O servidor será iniciado localmente e a API estará disponível para consumo.

### Testando a API

A API pode ser testada utilizando ferramentas como:

* Flashpost
* Postman
* Insomnia
* Thunder Client (VS Code)


## Estrutura do projeto

O backend foi desenvolvido utilizando uma arquitetura em camadas, separando responsabilidades para facilitar a manutenção e evolução da aplicação.

```text
backend/
└── src/
    ├── constants/        # Mensagens de erro e constantes da aplicação
    ├── controllers/      # Recebem as requisições HTTP e retornam respostas
    ├── data/             # Armazenamento local em arquivos JSON
    ├── errors/           # Classes de erro personalizadas
    ├── middlewares/      # Middlewares de validação e tratamento global de erros
    ├── repositories/     # Comunicação com a camada de persistência
    ├── routes/           # Definição dos endpoints da API
    ├── schemas/          # Schemas de validação dos dados
    ├── services/         # Regras de negócio da aplicação
    ├── app.js            # Configuração da aplicação Express
    └── server.js         # Inicialização do servidor
```

Essa organização permite separar a lógica de negócio, comunicação HTTP e persistência dos dados, tornando o projeto mais organizado e preparado para futuras evoluções.


## Endpoints da API

### Veículos

| Método | Endpoint                    | Descrição                                   |
| ------ | --------------------------- | ------------------------------------------- |
| GET    | `/vehicles`                 | Lista todos os veículos                     |
| GET    | `/vehicles/:id`             | Busca um veículo específico                 |
| POST   | `/vehicles`                 | Cadastra um novo veículo                    |
| PUT    | `/vehicles/:id`             | Atualiza um veículo                         |
| DELETE | `/vehicles/:id`             | Remove um veículo                           |
| GET    | `/vehicles/:id/fuelings`    | Lista os abastecimentos do veículo          |
| GET    | `/vehicles/:id/consumption` | Calcula o consumo médio do veículo          |
| GET    | `/vehicles/:id/statistics`  | Retorna estatísticas do veículo             |
| GET    | `/vehicles/:id/dashboard`   | Retorna informações consolidadas do veículo |

### Abastecimentos

| Método | Endpoint      | Descrição                                 |
| ------ | ------------- | ----------------------------------------- |
| GET    | `/fuel`       | Lista todos os abastecimentos             |
| GET    | `/fuel/:id`   | Busca um abastecimento específico         |
| POST   | `/fuel`       | Registra um novo abastecimento            |
| PUT    | `/fuel/:id`   | Atualiza um abastecimento                 |
| DELETE | `/fuel/:id`   | Remove um abastecimento                   |
| GET    | `/fuel/types` | Lista os tipos de combustível disponíveis |
