import { listingTasks } from "./utils/listingTasks.js";
//import { tasks } from "./data/tasks.js";

import { createTaskLocal, getTasksLocal } from "./utils/getTasksLocal.js";


let c = (el) => document.querySelector(el); //seleciona um elemento
let ca = (el) => document.querySelectorAll(el);//seleciona varios elementos


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


//busca tasks na pasta data
let tasks = getTasksLocal();
listingTasks(tasks);


//Abrir e fechar o modal de criação de task
const modal = c('.create-task-modal');
const openTaskBuild = c('.create-task-button button')
openTaskBuild.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
const closeTaskBuild = c('.create-task-modal span')
closeTaskBuild.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
})


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


const form = document.querySelector('.create-task-modal form');
const statusMessage = document.querySelector('.status-menssage');


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


//localStorage.clear()