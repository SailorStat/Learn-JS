//? Стили и классы
//* className и classList
// Если мы хотим заменить все классы на один, то используем className
// Если мы хотим минипулировать одиним из классов, то используем classList
// elem.classList.add('class')      - добавить класс
//                remove('class')   - удалить класс
//                toggle('class')   - добавить класс, если нет, иначе удалить
//                contains('class') - содержится класс или нет
// classList можно перебирать for..of


//* elem.style - свойство элемента, как если бы оно было записано в html
// свойства в несколько слов в js пишутся, как camelCase
// свойства, начинающиеся с - пишутся с большой буквы: WebkitBorderRadius


//* Сброс стилей
// если нам нужно отчистить свойство, то достаточно присвоить пустую строку
document.body.style.background = "gold"
setTimeout(() => document.body.style.background = '', 2000)

// чтобы установить сразу несколько стилей, можно воспользоваться cssText
document.body.style.cssText = 'color: green; font-size: 15px; margin: 30px;'
//TODO Это свойство заменяет все текущие стили на указанные


//* Если нужен элемент с учётом стилей в css, то поможет getCompytedStyle(elem, [pseudo])

//! к :visited нельзя получить доступ из js в целях конфиденциальности


// Задача. Функция на создание уведомления
function showNotification({top = 0, right = 0, className, html}) {
  const div = document.createElement('div')
  div.className = "notification";
  if (className) {
    div.classList.add(className);
  }

  div.style.top = top + 'px'
  div.style.right = right + 'px'
  div.innerHTML = html
  document.body.append(div)
  setTimeout(() => div.remove(), 1000)
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);