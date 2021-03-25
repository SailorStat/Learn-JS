//? Фокусировка
//* focus и blur срабатывает, когда елемент получил фокус и потерял его
// используется для элементов форм
input.addEventListener('focus', () => {
  input.style.background = "blue"
})
input.addEventListener('blur', () => {
  input.style.background = "green"
})


//* Методы elem.focus/blur() устанавливают, снимают фокус
input.addEventListener('blur', () => {
  console.log(input.value)
  if (input.value == '') {
    input.focus()
  }
})


//* tabindex позволяет фокусироваться на элементах без фокуса div, span и других
// также работает elem.tabIndex
// метод focus() на них не работает
// порядок фокусировки: 1 - 2 - 3 .... - 0
// на -1 браузер не фокусируется


//! focus и blur не всплывают
//* focusin и focusout всплывают


//* текущий элемент можно получить через document.activeElement