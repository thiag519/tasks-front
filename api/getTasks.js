//import { URL_GET } from "../secret/secret.js";

/**
 * Função para listar as tarefas
 * Esta função é responsável por listar as tarefas. Ela envia uma requisição GET para o backend e exibe mensagens de status para o usuário.
 * @returns { void } Não retorna nada, apenas executa a ação de listar as tarefas e exibir mensagens de status.
 */
/*
const statusMessage = document.querySelector('.status-menssage');


export const getTasks = async () => {
  if(statusMessage){
  statusMessage.textContent = "Carregando...";
  setTimeout(() => {
      statusMessage.textContent = '';
  }, 5000)
  }
  try {
     const response = await fetch(`${URL_GET}`);
      
    if(response.ok){
      statusMessage.textContent = "Tarefas listadas com sucesso!";
      setTimeout(() => {
      statusMessage.textContent = '';
      }, 5000)
      return response.json();
    }else{
      statusMessage.textContent = "Erro ao listar as tarefas. Tente novamente."
      setTimeout(() => {
      statusMessage.textContent = '';
  }, 5000);
    } 
  } catch (err) {
    console.error("Erro ao listar as tarefas:", err);
    return [];
  }
};*/

