import { listingTasks } from "./utils/listingTasks.js";
import { tasks } from "./data/tasks.js";

//import { createTaskLocal, getTasksLocal } from "./utils/getTasksLocal.js";
import { getTasks } from "./service/getTasks.js";
import { createTask } from "./service/createTask.js";

let c = (el) => document.querySelector(el); //seleciona um elemento
let ca = (el) => document.querySelectorAll(el);//seleciona varios elementos
const statusMessage = document.querySelector('.status-menssage');



// Função para listar as tarefas
//let tasksLocalhost = getTasksLocal();

const loadTasks = async () => {
  statusMessage.textContent = 'Carregando...';
  listingTasks(tasks);
  const tasksBackend = await getTasks();
  if(tasksBackend.length > 0){
    listingTasks(tasksBackend);
    statusMessage.textContent = 'Minhas tarefas...';
  }else{
    listingTasks(tasks);
    statusMessage.textContent = 'Tarefas de demostração...';
  }
  setTimeout(() => {
    statusMessage.textContent = '';
  }, 5000);
}
loadTasks();



// Função para ezibir e ocultar senha na criação de tarefa

const passwordInput = c('#task-password');
const togglePassword = c('.toggle-password');
const togglePasswordImage = c('.toggle-password img');

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordImage.src = "assets/olho.png";
  } else {
    passwordInput.type = "password";
    togglePasswordImage.src = "assets/olho-1.png";
  }
});



// Função para criar uma nova tarefa

const modal = document.querySelector('.create-task-modal');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //e.stopPropagation();
  try {
    const formData = new FormData(e.target);
    const password = form.password.value;
    const data = {
      title: formData.get('title'),
      description: formData.get('description')
    };

    if (!data.title || !data.description) {
      statusMessage.textContent = "Por favor, preencha todos os campos.";
      modal.style.display = 'none'; 
      return;
    }
    createTask(data, password);
    
    setTimeout(() => {
      form.reset();
      modal.style.display = 'none';
      openTaskBuild.style.display = 'flex';
      //location.reload();
      loadTasks();
    }, 2000);
    
  } catch (err) {
    console.error("Erro ao criar a tarefa:", err);
    statusMessage.textContent = "Erro ao criar a tarefa. Tente novamente.";
    //document.body.style.overflow = '';
  }  
});



// Abrir e fechar o menu

let menuMob = c('.menu');
let mmLines = ca('.mm-line');
const menuToggle = c('.menu-mobile-line');
menuToggle.addEventListener('click',() => {
if(menuMob.style.right === '0%') {
  menuMob.style.right = '-100%';
}else{
  menuMob.style.right = '0%';
}
  mmLines[0].classList.toggle('animationUp');
  mmLines[2].classList.toggle('animationLow');
  mmLines[1].classList.toggle('animationMiddle')  ;      
});



// Fechar o menu quando clicar em um item no menu

const closeMenu = ca('.menu nav ul li');
closeMenu.forEach(e => {
  e.addEventListener('click', () => {
  menuMob.style.right = '-100%';
  mmLines[0].classList.toggle('animationUp');
  mmLines[2].classList.toggle('animationLow');
  mmLines[1].classList.toggle('animationMiddle');
})
})



// Coloca style na area que foi clicada do menu 

let menuBtnMob = ca('.menu li'); 
menuBtnMob.forEach((item) => {
  item.addEventListener('click', () => {
    menuBtnMob.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});



//Abrir e fechar o modal de criação de task

const openTaskBuild = c('.create-task-button button')

openTaskBuild.addEventListener('click', () => {
  modal.style.display = 'flex';
  openTaskBuild.style.display = 'none';
});
const closeTaskBuild = c('.create-task-modal span')
closeTaskBuild.addEventListener('click', () => {
  modal.style.display = 'none';
  openTaskBuild.style.display = 'flex';
  form.reset();
});



// Funçao que observa o scroll para por o active na section que estiver sendo exibida

const section = ca('section');
window.addEventListener('scroll', () => {
  section.forEach((item, index) => {
  const delimitador = item.getBoundingClientRect() //obter Cliente Delimitador Retângulo
    if (delimitador.top <= window.innerHeight/3 && delimitador.bottom >= window.innerHeight/3) {
      window.currentIndex = index;
      menuBtnMob.forEach((item, index) => {
          item.classList.remove('active');
        if(currentIndex === index) {
          item.classList.add('active');
        }
      })
    };
  });
});

/*
if(tasksLocalhost.length > 0){
  form.addEventListener('submit', (e) =>{
  e.preventDefault()
  statusMessage.textContent = 'Carregando...';
  let id = Date.now().toString();

  createTaskLocal(id, form.title.value, form.description.value);
  form.reset()
  setTimeout(() => {
    modal.style.display = 'none';
    //document.body.style.overflow = '';
  },200)
  setTimeout(() => {
    statusMessage.textContent = '';
    location.reload();
  },600)  
  
});
}
*/


//localStorage.clear()