import { NextFunction, Request, Response } from "express";

// Exporta uma função assíncrona chamada 'ensureAuthenticated' que atua como middleware
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction) {
  // Obtém o token de autorização do cabeçalho da solicitação
  const token = request.headers.authorization;

  // Verifica se o token não foi fornecido na solicitação
  if (!token) {
    // Se não houver token, retorna uma resposta de status 401 (Não Autorizado)
    return response.status(401).send();
  }

  // Divide o token em duas partes usando o espaço em branco como separador
  const [, user] = token.split(" ");

  // Exibe o usuário extraído do token no console (para fins de depuração)
  console.log(user)

  // Verifica se o usuário é igual a "admin"
  if (user === "admin") {
    // Se o usuário for "admin", chama a próxima função de middleware
    return next()
  }

  // Se o usuário não for "admin", retorna uma resposta de status 401 (Não Autorizado)
  return response.json(401).send();
}
