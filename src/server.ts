import express from 'express';
import { routes } from './routes';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

// Importe a biblioteca Express para criar um aplicativo web
const app = express();

// Use o middleware express.json() para analisar as solicitações com formato JSON
app.use(express.json());

// Use o middleware 'routes' para lidar com as rotas da sua aplicação
app.use(routes)

// Defina uma rota para a documentação da API usando Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

// Inicie o servidor na porta 3333
app.listen(3333);