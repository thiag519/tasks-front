/**
 * Função para criar uma nova tarefa
 * Esta função é responsável por criar uma nova tarefa. Ela coleta os dados do formulário, envia uma requisição POST para o backend e exibe mensagens de status para o usuário.
 * @returns { void } Não retorna nada, apenas executa a ação de criar uma nova tarefa e exibir mensagens de status.
 */

import { URL_POST } from "../secret/secret.js";


export const createTask = () => {

  const modal = document.querySelector('.create-task-modal');
  const statusMessage = document.querySelector('.status-menssage');
  const form = document.querySelector('#form');

  //console.log("Form encontrado:", form);
  if (!form) {
    console.warn("Form não encontrado");
    return;
  }
   if (!statusMessage) {
    console.warn("statusMessage não encontrado");
    return;
  }
  
  form.addEventListener('submit', async (e) => {
    
    e.preventDefault();
    //e.stopPropagation();

    const formData = new FormData(e.target);
    const password = form.password.value;
    const data = {
      title: formData.get('title'),
      description: formData.get('description')
    };
    if (!data.title || !data.description) {
      console.log("Título ou descrição vazios");
      statusMessage.textContent = "Por favor, preencha todos os campos.";
      return;
    }
    statusMessage.textContent = "Carregando...";
    try {
      const response = await fetch("http://localhost:8080/tasks/add", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "x-admin-password": password
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      
      if(result.success && response.ok) {
        modal.style.display = 'none';
        statusMessage.textContent = "Tarefa criada com sucesso!";
        form.reset();

        setTimeout(() => {
        modal.style.display = 'none';
        //document.body.style.overflow = '';
        },200)
      }else {
        modal.style.display = 'none';
        alert(result.error || "Erro ao criar a tarefa. Acesso negado.");
        statusMessage.textContent = result.message || "Erro ao criar a tarefa. Acesso negado.";
      }
    } catch (err) {
      modal.style.display = 'none';
      statusMessage.textContent = "Erro de conexão com o servidor";
      console.error("Erro ao criar a tarefa:", err);
    }
    setTimeout(() => {
      statusMessage.textContent = '';
    }, 5000);
  });
};
