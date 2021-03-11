//? Размеры и прокрутка окна
//* для большинства запросов можно использовать document.documentElement === <html>


//* Ширина и высота документа
//TODO Прокручиваемая высота может работать неправильно, для правильных значений надо использовать:
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
// помечено не вдумываться, просто использовать


