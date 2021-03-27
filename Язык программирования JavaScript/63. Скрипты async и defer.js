//? Скрипты: async и defer
//* Скрипт выполняется по ходу чтения html
// Пока скрипт не загрузится и не выполнится, чтение документа не продолжается
// Это основная причина того, что скрипт помещается в конец
// Но это плохой вариант, если страница очень длинная
// Задержка до выполнения скрипта будет очень долгая, если плохое интернет-соединение
// В таких случаях скрипт хочется запустить раньше


//* html-атрибут defer у тега <script> говорит о том,
//* что скрипт надо загружать фоном, а сейчас надо продолжать строить DOM
// defer не блокирует загрузку
// выполняется, когда DOM готов, до DOMContentLoaded
// TODO несколько defer будут загружаться (выполняться) в порядке очереди независимо от размера
// TODO defer работает только для внешних скриптов


//* скрипты с async выполняются как только смогут
// они никого не ждут и их никто не ждёт
// выполняются в любом порядке


//* Динамически загружаемые скрипты
// скрипты можно добавить через другой скрипт
const script = document.createElement('script');
script.src = "Язык программирования JavaScript\\54. Drag'n'drop.js";
document.body.append(script) // в момент написания этот скрипт называется main.js и находится в папке с index.html
// динамические скрипты ведут себя, как async
//* если перед append указать async = false, то скрипты будут загружаться в порядке, в котором указаны