/**
 * Função para criar uma nova tarefa
 * Esta função é responsável por criar uma nova tarefa. Ela coleta os dados do formulário, envia uma requisição POST para o backend e exibe mensagens de status para o usuário.
 * @returns { void } Não retorna nada, apenas executa a ação de criar uma nova tarefa e exibir mensagens de status.
 */
/*
import { URL_POST } from "../secret/secret";


const form = document.querySelector('.create-task-modal form');
const statusMessage = document.querySelector('.status-menssage');

export const createTask = () => {
  
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    title: form.title.value,
    description: form.description.value
  };
  const token = form.password.value;

  statusMessage.textContent = "Carregando...";
  try {
    const response = await fetch(URL_POST, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.success) {
      statusMessage.textContent = "Tarefa criada com sucesso!";
      form.reset();
    }else {
      statusMessage.textContent = "Erro ao criar a tarefa. Tente novamente.";
    }
  } catch (err) {
    statusMessage.textContent = "Erro de conexão com o servidor";
  }
});

 if(statusMessage.textContent !== ''){
    setInterval(() => {
      statusMessage.textContent = '';
  }, 5000);
  }
}
*/