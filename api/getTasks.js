import { URL_GET } from "../secret/secret.js";

/**
 * Função para listar as tarefas
 * Esta função é responsável por listar as tarefas. Ela envia uma requisição GET para o backend e exibe mensagens de status para o usuário.
 * @returns { void } Não retorna nada, apenas executa a ação de listar as tarefas e exibir mensagens de status.
 */
const statusMessage = document.querySelector('.status-menssage');


export const getTasks = async () => {
  
  try {
    const response = await fetch(URL_GET);
    //console.log(response);
    const result = await response.json();
    //console.log(result);

    if(response.ok && result.success){
      statusMessage.textContent = "Tarefas listadas com sucesso!";
      return result.data;
    }else{
      statusMessage.textContent = result.error || "Erro ao listar as tarefas. Tente novamente."
      return [];
    } 
  } catch (err) {
    console.error("Erro ao listar as tarefas:", err);
    statusMessage.textContent = "Erro ao listar as tarefas. Tente novamente.";
    
    return [];
  }
};
/*setTimeout(() => {
  statusMessage.textContent = '';
}, 5000);*/
if(statusMessage){
  statusMessage.textContent = "Carregando...";
  setTimeout(() => {
      statusMessage.textContent = '';
  }, 5000)
}
