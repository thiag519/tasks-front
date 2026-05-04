/**
 * Função para criar uma nova tarefa
 * Esta função é responsável por criar uma nova tarefa. Ela coleta os dados do formulário, envia uma requisição POST para o backend e caso o usuário não possua a senha a tarefa não será criada.
 * @returns { void } Não retorna nada, apenas executa a ação de criar uma nova tarefa.
 */

//import { URL_POST } from "../secret/secret.js";
//import { getTasks } from "./getTasks.js";


export const createTask = async (data, password) => {
  try {
    const response = await fetch("https://tasks-java-1.onrender.com/tasks/add", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "x-admin-password": password
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    
    if(result.success && response.ok) {
     console.log("Tarefa criada com sucesso:", result);
    }else {
      console.error("Erro ao criar a tarefa:", result.erro || "Erro desconhecido");
    }
  } catch (err) {
    console.error("Erro ao criar a tarefa:", err);
  }
};
