//? Клавиатура: keydown и keyup
//TODO для отслеживания события воода лучше использовать input, так как он совместим с голосовым вводом
//TODO и копированием, здесь остановимся именно на клавиатурных событиях

//* keydown и keyup происходят при нажатии и отжатии клавиши соответственно


//* event.code показывает результат ввода - используется, когда важна раскладка (набор текста)
//* event.key показывает какая клавиша была нажата - используется при любой раскладке (горячие клавиши)


//* При зажатии клавиши срабатывает автоповтор. На несколько keydown будет приходиться один keyup
//* у такого события event.repeat === true


//* Все действия по умолчанию можно изменить или удалить через event.preventDefault()
//* кроме тех, что на уровне операционной системы (Alt + F4 и другие)
const input = document.createElement('input')
input.style.width = '200px'
input.style.height = '15px'
document.body.append(input)

input.addEventListener('keydown', checkPhone)

function checkPhone(event) {
  const key = event.key
  return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
  key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace' || event.preventDefault()
}