
/**
 * Função para excluir uma tarefa
 * Esta função é responsável por excluir uma tarefa. Ela envia uma requisição DELETE para o backend e exibe mensagens de status para o usuário.
 * @param { string } id - O ID da tarefa a ser excluída.
 * @returns { void } Não retorna nada, apenas executa a ação de excluir a tarefa e exibir mensagens de status.
 */

/*

import { URL_DELETE } from "../secret/secret";

const statusMessage = document.querySelector('.status-menssage');

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${URL_DELETE}/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    if(response.ok){
      statusMessage.textContent = "Tarefa excluída com sucesso!";
    }
    if(!response.ok){
      statusMessage.textContent = "Erro ao excluir a tarefa. Tente novamente.";
    } 
  } catch (err) {
    console.error("Erro ao excluir a tarefa:", err);
  }
};

if(statusMessage.textContent !== ''){
    setInterval(() => {
      statusMessage.textContent = '';
  }, 5000);
}
*/