//? Отправка формы: событие и метод submit
//* Событие 'submit' происходит при отправке формы на сервер
// Есть два способа отправить форму:
//    нажать кнопку <input type="submit"> или <input type="image">
//    нажать Enter в любом поле
// Оба генерируют событие 'submit', во время которого можно инициализировать проверку
// если проверка не пройдена, то можно вызвать event.preventDefault() и форма не отправится на сервер

//TODO при нажатии Enter в текстовом поле у формы генерируется клик по <input type="submit">


//* Метод form.submit() позволяет провести отправку из js
// При этом событие 'submit' не генерируется
main.addEventListener('click', () => {
  const form = document.createElement('form')
  form.action = 'https://yandex.ru/search/?text='
  form.method = 'GET'
  form.innerHTML = '<input name="text" value="Сайлор молодец">'
  document.body.append(form)
  form.submit()
})


// Задача. 61. Модальное диалоговое окно с формой.html