/**
 * Esta função executa a ação de armazenar o id do elemento arrastado no dataTransfer para poder ser acessado novamente quando o elemento for solto em uma zona de drop.
 * @param { DragEvent } e - representa o evento de arrasto, ele contem informações sobre o elemento que está sendo arrastado e o estado do arrasto.
 * @returns { void } Não retorna nada, apenas executa a ação de armazenar o id do elemento arrastado no dataTransfer.
 */
export let taskId;

export const dragStart = (e) => {
  const task = e.target.closest('[data-task]');

  taskId =  task.dataset.task;
  
  e.dataTransfer.setData("task", taskId);

  //console.log('id: ',taskId)
}