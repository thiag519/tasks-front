/**
 * Esta função executa a ação de soltar o elemento arrastado em uma zona de drop. Envia o id da tarefa para o backend para atualizar o status da tarefa.
 * @param { DragEvent } e - representa o evento de soltar, ele contem informações sobre o elemento que está sendo solto e o estado do evento.
 * @returns { void } Não retorna nada, apenas executa a ação de soltar o elemento arrastado.
 */

import { changeTaskLocal } from "../utils/getTasksLocal.js";
import { taskId } from "./event.js";

//import { listingTasks } from "../utils/listingTasks.js";

let c = (el) => document.querySelector(el); //seleciona um elemento

//const todoList = c('.todo-list');
const tasksArea1 = c('.tasks-area-1');
const tasksArea2 = c('.tasks-area-2');

export const drop = (e) => {
  e.preventDefault();
  let id = e.dataTransfer.getData("task");
 //console.log("Id do elemento",id)
  if(!id) {
    console.log("taskId: ",taskId)
    id = taskId;
  };

  const el = document.querySelector(`[data-task="${id}"]`);
  //console.log("O elemento",el)
  const areaDrop = e.currentTarget;
  //console.log("A onde dropa",areaDrop)
  try {
    
    if(el.classList.contains('todo') && areaDrop === tasksArea1){
      el.classList.replace('todo', 'doing');
      areaDrop.appendChild(el);
      console.log(id)
      changeTaskLocal(id, 'doing');
    }
    if(el.classList.contains('doing') && areaDrop === tasksArea2){
      el.classList.replace('doing', 'done')
      areaDrop.appendChild(el);
      changeTaskLocal(id, 'done');
    }
    if(el.classList.contains('done') && areaDrop === tasksArea1){
      el.classList.replace('done', 'doing');
      areaDrop.appendChild(el);
      changeTaskLocal(id, 'doing');
    }
  } catch (err) {
    console.error('Erro ao atualizar a tarefa:', err)
  }
}