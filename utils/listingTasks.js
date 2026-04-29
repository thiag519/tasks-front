import { dragover } from '../dragdrop/drag.js';
import { dragStart } from '../dragdrop/event.js';
import { drop } from '../dragdrop/drop.js';
//import { deleteTaskLocal } from './getTasksLocal.js';
import { deleteTask } from '../service/deleteTask.js';


let c = (el) => document.querySelector(el);

const todoList = c('.todo-list');
const doingList = c('.doing-list');
const doneList = c('.done-list');

const tasksArea = c('.tasks-area');
const tasksArea1 = c('.tasks-area-1');
const tasksArea2 = c('.tasks-area-2');

if(todoList) todoList.style.display = 'none';
if(doingList) doingList.style.display = 'none';
if(doneList) doneList.style.display = 'none';



// listar tarefas
export const listingTasks = (tasks) => {
  //console.log(tasks)
  // limpa o campo antes de atualizar a lista de tarefas para evitar que as tarefas sejam duplicadas
  tasksArea.innerHTML = '';
  tasksArea1.innerHTML = '';
  tasksArea2.innerHTML = '';
  try {

  // os fragmentos são usados para criar uma estrutura de elementos em memória antes de adicioná-los ao DOM, isso melhora a performance e evita reflows desnecessários.
  const fragmentTodo = document.createDocumentFragment();
  const fragmentDoing = document.createDocumentFragment();
  const fragmentDone = document.createDocumentFragment();

  const createTaskElement = (template, item)  => {
    
    let el = template.querySelector('.todo, .doing, .done');
    let task = el.cloneNode(true);

    task.setAttribute('data-task', item.id );
    task.addEventListener('dragstart', dragStart);

    let deleteTaskElement = task.querySelector('span');
    let title = task.querySelector('.title');
    let description = task.querySelector('.description');


    if(title) title.textContent = item.title;
    if(description) description.textContent = item.description;

    deleteTaskElement.addEventListener('click', () => {
      const password = prompt("Digite a senha para excluir a tarefa permanentemente. Sem a senha, a tarefa não será excluída permanentemente.");
      task.style.display = 'none';
      deleteTask(item.id, password)
    });
    return task;
  };

   tasks.forEach((item) => {
    if(item) {
      if(item.status === 'todo'){
        fragmentTodo.appendChild(createTaskElement(todoList, item))
      }
      if(item.status === 'doing'){
        fragmentDoing.appendChild(createTaskElement(doingList, item))
      }
      if(item.status === 'done'){
        fragmentDone.appendChild(createTaskElement(doneList, item))
      }
    };
  });

  
  // Adiciona os fragmentos ao DOM, isso é feito depois de processar todas as tarefas para evitar múltiplas re-renderizações.
  tasksArea.appendChild(fragmentTodo);
  tasksArea1.appendChild(fragmentDoing);
  tasksArea2.appendChild(fragmentDone); 

  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
  };
}
    

tasksArea.addEventListener('dragover', dragover);
tasksArea.addEventListener('drop', drop);

tasksArea1.addEventListener('dragover', dragover);
tasksArea1.addEventListener('drop', drop);

tasksArea2.addEventListener('dragover', dragover);
tasksArea2.addEventListener('drop', drop);