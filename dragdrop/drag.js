/**
 * Esta função executa a ação de verificar o evento que ocorre quando o usuário move o elemento arrastado sobre uma zona de drop.
 * @param { DragEvent } e - representa o evento de arrastar, ele contem informações sobre o elemento que está sendo arrastado e o estado do evento.
 * @param {number} pixel - pixel representa a distância em pixels da borda da janela onde o scroll automático deve ser acionado.
 * @param {number} speed - define a velocidade do scroll em pixels por movimento.
 * @returns { void } Não retorna nada, apenas executa a ação de verificar o evento de arrastar.
 */


export const dragover = (e) => {
  e.preventDefault();
  const pixel = 100;
  const speed = 10;

  const clientX = (e.clientX ?? e.touches?.[0]?.clientX ?? e.targetTouches?.[0]?.clientX);// se não ouver envento de mouse, se for undefined ou null, busca evento de toque
  const innerWidth = window.innerWidth ?? document.documentElement.clientWidth;

  if (clientX == null) return; // se não achar nenhum evento, nem de mouse e de touch

  if (innerWidth - clientX < pixel) {
    window.scrollBy(speed, 0);
  } else if (clientX < pixel) {
    window.scrollBy(-speed, 0);
  }

  //console.log("sobre a drop zone");
}

/*
export const dragover = (e) => {
  e.preventDefault();
  const pixel = 100;
  const speed = 10;

  console.log( 'innerWidth: ',window.innerWidth);
  console.log('e.clientX: ',e.clientX)

  if(window.innerWidth - e.clientX < pixel){
  window.scrollBy(speed, 0);
  }else if( e.clientX < pixel) {
  window.scrollBy(-speed, 0);
}

*/