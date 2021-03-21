//? Drag'n'drop
// Для создания перемещения используется position: absolute и изменение значений top, left

//* Алгоритм Drag'n'drop
// При событии mousedown готовим элемент к перемещению
// При mousemove измеряем положение курсора и задаём это положение элементу
// При mouseup остановливаем перенос элемента

// чтобы объект не задваивался, задаётся elem.ondragstart = () => {return false}



document.addEventListener('mousedown', (event) => {
  if (event.target !== rabbit) return

  rabbit.style.position = 'absolute'
  
  function elemPos(event) {
    rabbit.style.left = event.clientX - shiftX + 'px'
    rabbit.style.top = event.clientY - shiftY - 13 + 'px'
  }

  let shiftX = event.pageX - rabbit.getBoundingClientRect().left
  let shiftY = event.pageY - rabbit.getBoundingClientRect().top
  rabbit.style.zIndex = 1000
  document.body.append(rabbit)

  elemPos(event)

  document.addEventListener('mousemove', elemPos);
  
  rabbit.onmouseup = function() {
    document.removeEventListener('mousemove', elemPos);
    rabbit.onmouseup = null;
  }
})
