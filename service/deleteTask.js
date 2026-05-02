/**
 * Função para excluir uma tarefa
 * Esta função é responsável por excluir uma tarefa. Ela envia uma requisição DELETE para o backend e caso o usuário não possua a senha so deleta no front.
 * @param { string } id - O ID da tarefa a ser excluída.
 * @returns { void } Não retorna nada, apenas executa a ação de excluir a tarefa.
 */
//import { URL_DELETE } from "../secret/secret.js";
import { getTasks } from "./getTasks.js";

export const deleteTask = async (id, password) => {
  try {
    const response = await fetch(`https://tasks-java-1.onrender.com/tasks/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "x-admin-password": password
      }
    });
    if(response.ok){
      getTasks(); 
    }
    if(!response.ok){
      console.error("Erro ao excluir a tarefa:", response.statusText);
    } 
  } catch (err) {
    console.error("Erro ao excluir a tarefa:", err);
  }
};

