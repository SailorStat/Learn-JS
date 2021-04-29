//? Единицы измерения: px, em, rem и другие
//* Пиксели
// Конечная величена, может быть и целой и дробной
// В процессе построения вёрстки браузер округляет значения

// Достоинства:
//    - просто, чётко и понятно

// Недостатки:
//    - примитивность, присутствуют более мощные единицы имерения


//* Относительно шрифта: em
// 1em - текущий размер шрифта
// Размеры в  em  - относительные, привязаны к текущему контексту размера родителя в px

//todo Размер шрифта - условная единица, которая чуть больше,
//todo    чем расстояние от верха самой большой, до низа самой маленькой буквы


//* Проценты %
// В основном он зависит от величины родителя, за исключением случаев:
//    при установке margin-left за основу берётся ширина родителя
//    при установке line-heigth за основу берётся текущий размер шрифта
//    при установке width/height за основу берётся высота/ширина родителя
//        при  position: fixed  родителем считается окно


//* Единица rem: смесь px и em
// Задаёт размер шрифта относительно размера шрифта элемента <html>


//* Относительно экрана: vw, vh, vmin, vmax
// vw - 1% ширины экрана
// vh - 1% высоты экрана
// vmin - наименьшее из vw и vh
// vmax - наибоьшее из vw и vh