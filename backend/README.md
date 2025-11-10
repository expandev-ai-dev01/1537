# TODO List - Backend API

Sistema de gerenciamento de tarefas - API REST

## Tecnologias

- Node.js
- Express
- TypeScript
- SQL Server
- Zod (validação)

## Estrutura do Projeto

```
src/
├── api/              # Controladores de API
├── routes/           # Definições de rotas
├── middleware/       # Middlewares Express
├── services/         # Lógica de negócio
├── utils/            # Funções utilitárias
├── instances/        # Instâncias de serviços
├── config/           # Configurações
└── server.ts         # Ponto de entrada
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie `.env.example` para `.env`
2. Configure as variáveis de ambiente
3. Configure o banco de dados SQL Server

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Produção

```bash
npm start
```

## Endpoints da API

### Health Check
- `GET /health` - Verifica status da API

### API v1
- Base URL: `/api/v1`
- External (público): `/api/v1/external`
- Internal (autenticado): `/api/v1/internal`

## Padrões de Código

- TypeScript strict mode
- Path aliases com `@/`
- Validação com Zod
- Documentação TSDoc
- Separação de responsabilidades

## Licença

ISC