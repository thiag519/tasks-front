/**
 * Função para atualizar uma tarefa
 * Esta função é responsável por atualizar uma tarefa. Ela envia uma requisição PUT para o backend e exibe mensagens de status para o usuário.
 * @param { string } id - O ID da tarefa a ser atualizada.
 * @returns { void } Não retorna nada, apenas executa a ação de atualizar a tarefa e exibir mensagens de status.
 */

//import { URL_PUT } from "../secret/secret.js";
import { getTasks } from "./getTasks.js";


const statusMessage = document.querySelector('.status-menssage');

export const changeTask = async (id, status) => {
  const password = prompt("Digite a senha para atualizar a tarefa:");

  try {
    const response = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
        "x-admin-password": password
      },
      body: JSON.stringify({status})

    }); 
    if(response.ok){
      statusMessage.textContent = "Tarefa atualizada com sucesso!";
    }
    if(!response.ok){
      statusMessage.textContent = "Erro ao atualizar a tarefa. Tente novamente.";
      console.error("Erro ao atualizar a tarefa:", response.statusText);
      getTasks(); // Recarrega as tarefas para refletir o estado atual do backend
    }
   
  } catch (err) {
    console.error("Erro ao atualizar a tarefa:", err);
  }
} 

if(statusMessage.textContent !== ''){
    setInterval(() => {
      statusMessage.textContent = '';
  }, 5000);
}