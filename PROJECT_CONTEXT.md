# FuelTrack - Contexto do Projeto

## Objetivo

O FuelTrack é uma aplicação backend desenvolvida com fins educacionais para estudo de desenvolvimento web utilizando Node.js e Express.

O objetivo é permitir o gerenciamento de veículos e abastecimentos, possibilitando futuramente cálculos de consumo, custos operacionais e histórico de utilização dos veículos.

O projeto está sendo desenvolvido de forma incremental, priorizando clareza, simplicidade e boas práticas para servir também como material de estudo para programadores iniciantes.

---

# Tecnologias Utilizadas

* Node.js
* Express
* Zod
* Nodemon
* JSON File Storage (persistência temporária)

---

# Padrões Utilizados

## Arquitetura em Camadas

Routes
↓
Controllers
↓
Services
↓
Repositories
↓
JSON Files

### Responsabilidades

#### Routes

Responsáveis por definir os endpoints da API.

#### Controllers

Recebem as requisições HTTP e retornam respostas.

#### Services

Contêm as regras de negócio.

#### Repositories

Responsáveis pela leitura e gravação dos dados.

---

# Estrutura Atual

src/

controllers/

* vehicles.controller.js
* fuelings.controller.js

services/

* vehicles.service.js
* fuelings.service.js

repositories/

* vehicles.repository.js
* fuelings.repository.js

routes/

* vehicles.routes.js
* fuel.routes.js

schemas/

* vehicle.schema.js
* fueling.schema.js

middlewares/

* errorHandler.js
* vehicles/

data/

* vehicles.json
* fuelings.json

app.js
server.js

---

# Funcionalidades Implementadas

## Veículos

* Listar veículos
* Buscar veículo por ID
* Criar veículo
* Atualizar veículo
* Excluir veículo

### Regras

* Brand obrigatório
* Model obrigatório
* Manufacture Year obrigatório
* Model Year obrigatório
* Model Year não pode ser menor que Manufacture Year

### Validação

Implementada utilizando Zod.

---

## Abastecimentos

### Implementado

* Listar abastecimentos
* Criar abastecimento

### Estrutura

* vehicleId
* date
* fuelType
* liters
* totalCost
* odometer

### Regra

* O veículo deve existir antes de permitir o cadastro do abastecimento.

---

# Convenções Adotadas

## Idioma

Código em inglês.

## API

Veículos:

* /vehicles

Abastecimentos:

* /fuel

## Persistência

Armazenamento em arquivos JSON durante a fase de aprendizado.

---

# Decisões Importantes

* Utilizar Zod para validações.
* Utilizar Repository Pattern.
* Manter arquitetura simples e didática.
* Utilizar JSON antes da introdução de banco de dados.
* Manter endpoint de abastecimentos como /fuel.
* Utilizar nomes internos relacionados a Fueling (abastecimento).

---

# Próximas Funcionalidades

* Validação Zod para abastecimentos
* GET /fuel/:id
* PUT /fuel/:id
* DELETE /fuel/:id
* Relatórios de consumo
* Estatísticas por veículo
* Integração futura com banco de dados

---

# Última Etapa Concluída

Etapa 30.7

Implementação do POST /fuel com persistência em arquivo JSON e validação de existência do veículo.
