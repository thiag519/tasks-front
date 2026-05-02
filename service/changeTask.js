/**
 * Função para atualizar uma tarefa
 * Esta função é responsável por atualizar uma tarefa. Ela envia uma requisição PUT para o backend e caso o usuário não possua a senha so altera no front.
 * @param { string } id - O ID da tarefa a ser atualizada.
 * @returns { void } Não retorna nada, apenas executa a ação de atualizar a tarefa.
 */

//import { URL_PUT } from "../secret/secret.js";
import { getTasks } from "./getTasks.js";

export const changeTask = async (id, status, password) => {

  try {
    const response = await fetch(`https://tasks-java-1.onrender.com/tasks/${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
        "x-admin-password": password
      },
      body: JSON.stringify({status})

    }); 
    if(response.ok){
      console.log("Tarefa atualizada com sucesso", response.success);
      getTasks();
    }
    if(!response.ok){
      console.error("Erro na resposta do backend:", response.statusText);
      getTasks(); 
    }
   
  } catch (err) {
    console.error("Erro ao atualizar a tarefa:", err);
  }
};