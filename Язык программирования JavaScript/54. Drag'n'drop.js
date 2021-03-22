//? Drag'n'drop
// Для создания перемещения используется position: absolute и изменение значений top, left

//* Алгоритм Drag'n'drop
// При событии mousedown готовим элемент к перемещению
// При mousemove измеряем положение курсора и задаём это положение элементу
// При mouseup остановливаем перенос элемента

// чтобы объект не задваивался, задаётся elem.ondragstart = () => {return false}


//* Цели переноса (droppable)
// Мы хотим перенести элемент над другим и считать нижний, но так нельзя
// document.elementFromPoint(clientX, clientY) возвращает самый глубоко вложенный элемент
// но чтобы его получить, надо скрыть передвигаемый .hidden = true


document.addEventListener('mousedown', (event) => {
  if (event.target !== rabbit) return
  rabbit.style.position = 'absolute'

  let prevElem = null

  function elemPos(event) {
    rabbit.style.left = Math.min(Math.max(event.clientX - shiftX, 0), document.documentElement.clientWidth - rabbit.clientWidth) + 'px'
    rabbit.style.top = Math.min(Math.max(event.clientY - shiftY, 0), document.documentElement.clientHeight - rabbit.clientHeight) - 13 + 'px'
    
    rabbit.hidden = true
    const bellowElem = document.elementFromPoint(event.clientX, event.clientY)
    rabbit.hidden = false

    if (bellowElem.id === 'house') {
      prevElem = bellowElem
      prevElem.style.color = 'green'
      console.log('Заяц дома')
    }

    if (bellowElem.id !== 'house' && prevElem && prevElem.id === 'house') {
      prevElem.style.color = 'red'
      console.log('Заяц не дома')
    }
  }
  

  let shiftX = event.pageX - rabbit.getBoundingClientRect().left
  let shiftY = event.pageY - rabbit.getBoundingClientRect().top
  rabbit.style.zIndex = 1000
  document.body.append(rabbit)

  elemPos(event)

  document.addEventListener('mousemove', elemPos);
  
  document.onmouseup = function() {
    document.removeEventListener('mousemove', elemPos);
    rabbit.onmouseup = null;
  }
})

// Задача. 54. Слайдер.html