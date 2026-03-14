
/**
 * Função para atualizar uma tarefa
 * Esta função é responsável por atualizar uma tarefa. Ela envia uma requisição PUT para o backend e exibe mensagens de status para o usuário.
 * @param { string } id - O ID da tarefa a ser atualizada.
 * @returns { void } Não retorna nada, apenas executa a ação de atualizar a tarefa e exibir mensagens de status.
 */
/*
import { URL_PUT } from "../secret/secret.js";


const statusMessage = document.querySelector('.status-menssage');

export const changeTask = async (id) => {
  try {
    const response = await fetch(`${URL_PUT}/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }); 
    console.log(response);
    if(response.ok){
      statusMessage.textContent = "Tarefa atualizada com sucesso!";
    }
    if(!response.ok){
      statusMessage.textContent = "Erro ao atualizar a tarefa. Tente novamente.";
    }
   
  } catch (err) {
    console.error("Erro ao atualizar a tarefa:", err);
  }
} 

if(statusMessage.textContent !== ''){
    setInterval(() => {
      statusMessage.textContent = '';
  }, 5000);
}*/