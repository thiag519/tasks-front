//import { tasks } from "../data/tasks.js";
import { taskId } from "../dragdrop/event.js";




export const getTasksLocal = () => {
  let tasksStorge = localStorage.getItem("tasks");
  if(!tasksStorge) {
    return [];
  }
  return JSON.parse(tasksStorge);
}
let tasksLocal = getTasksLocal();


export const changeTaskLocal = async (id, status) => {
  if(!id){
    id = taskId.toString();
  }
  let newTasks = tasksLocal.filter(e=> e.id == id);
  /*for(let i in tasksLocal) {
    newTasks = tasksLocal[i];
  }*/
  let title = newTasks[0].title;
  let description = newTasks[0].description;
  let deleted = await deleteTaskLocal(id.toString()); 
  if(deleted) { 
    setTimeout(()=>{
      createTaskLocal(id.toString(), title, description, status.toString());
    },200);
  }
}


export const deleteTaskLocal = (id) => {
  if(!id) return false;
  let newTasks = tasksLocal.filter(e => e.id !== id);
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  return true;
}


export const createTaskLocal = (id, title, description, status) => {
  let tasksStorge = getTasksLocal();
  
  const data = {
    id: id,
    title: title,
    description: description,
    status: status ? status : 'todo'
  };
  
  tasksStorge.push(data);
  localStorage.setItem("tasks", JSON.stringify(tasksStorge));
}