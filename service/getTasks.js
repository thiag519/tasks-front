//import { URL_GET } from "../secret/secret.js";
import { tasks } from "../data/tasks.js";

/**
 * Função para listar as tarefas
 * Esta função é responsável por listar as tarefas. Ela envia uma requisição GET para o backend e exibe mensagens de status para o usuário.
 * @returns { void } Retorna uma listar as tarefas e exibir mensagens de status.
 */
//const statusMessage = document.querySelector('.status-menssage');


export const getTasks = async () => {
  
  try {
    const response = await fetch(`http://localhost:8080/tasks`);
    const result = await response.json();

    if(response.ok && result.success){

      return result.data;
    }else{
      console.error("Erro ao listar as tarefas:", result.error || "Erro desconhecido");
      return [];
    } 
  } catch (err) {
    console.error("Erro ao listar as tarefas:", err);
    return []; 
  }
};

