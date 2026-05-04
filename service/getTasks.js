//import { URL_GET } from "../secret/secret.js";
import { tasks } from "../data/tasks.js";

/**
 * Função para listar as tarefas
 * Esta função é responsável por listar as tarefas. Ela envia uma requisição GET para o backend.
 * @returns { void } Retorna uma listar as tarefas.
 */
//const statusMessage = document.querySelector('.status-menssage');


export const getTasks = async () => {
  
  try {
    const response = await fetch(`https://tasks-java-1.onrender.com/tasks`);
    const result = await response.json();
    //console.log("Resposta do backend ao listar as tarefas:", result);
    if(response.ok && result.success){

      return result.data;
    }else{
      console.error("Erro ao listar as tarefas:", result.erro || "Erro desconhecido");
      return [];
    } 
  } catch (err) {
    console.error("Erro ao listar as tarefas:", err);
    return []; 
  }
};

