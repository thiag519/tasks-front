/**
 * Função para criar uma nova tarefa
 * Esta função é responsável por criar uma nova tarefa. Ela coleta os dados do formulário, envia uma requisição POST para o backend e exibe mensagens de status para o usuário.
 * @returns { void } Não retorna nada, apenas executa a ação de criar uma nova tarefa e exibir mensagens de status.
 */

//import { URL_POST } from "../secret/secret.js";
import { getTasks } from "./getTasks.js";


export const createTask = async (data, password) => {
  console.log("Criando tarefa com os dados:", data, "e senha:", password);
  try {
    const response = await fetch("http://localhost:8080/tasks/add", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "x-admin-password": password
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    
    if(result.success && response.ok) {
     console.log("Tarefa criada com sucesso:", result);
    }else {
      console.error("Erro ao criar a tarefa:", result.error || "Erro desconhecido");
    }
  } catch (err) {
    console.error("Erro ao criar a tarefa:", err);
  }
};
