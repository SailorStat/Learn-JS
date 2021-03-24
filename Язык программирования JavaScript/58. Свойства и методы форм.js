//? Свойства и методы форм
//* Навигация: формы и элементы
// Есть несколько способов получить форму:
//  document.forms.my - форма с атрибутом name="my"
//  document.forms[0] - первая форма

// после получения формы нам доступны его потомки через
// form.elements.one, где one - значение атрибута name у ребёнка
//* все элементы с любой вложенностью доступны в elements
// fieldset в форме тоже поддерживает свойство elements

//TODO к элементу можно получить доступ через form.name
//TODO Если изменить name, то элемент будет доступен и под старым, и под новым именем


//* Обратная ссылка: все элементы ссылаются на форму через elem.form


//* Элементы формы

//* input и textarea хранят значение в свойстве value или checked
//! не использовать innerHTML, он хранит только значение при загрузке страницы


//* select и option
// select.options - коллекция option внутри select
// select.value - текущий выбранный option
// select.selectedIndex - номер выбранного option

//* установление выбранного значения
// option.selected = true
// select.value = option.value
// select.selectedIndex = 2

// Если у form есть атрубут multiple, то можно выбрать сразу несколько
// в таком случае надо устанавливать для каждой опции атрибут selected
// Получить коллекцию выбранных можно так:
// let selected = Array.from(select.options).filter(option => option.selected).map(option => option.value)


//* new Option
// можно создавать новую опцию через new Option
// const option = new Option(text, value, defaultSelected, selected)
// text - содержание option
// value - значение value
// defaultselected - прописать наличие атрибута selected
// selected - значение атрибута selected
//TODO если опция не будет сразу выбрана, то используется запись new Option(text, value)

// option.selected - выбрана ли опция
// option.index - номер опции внутри select
// option.text - текст опции