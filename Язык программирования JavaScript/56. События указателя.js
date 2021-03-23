//? События указателя
//* Типы событий указателя
// pointerdown как mousedown
// pointerup как mouseup
// pointermove как mousemove
// pointerover как mouseover
// pointerout как mouseout
// pointerenter как mouseenter
// pointerleave как mouseleave
// pointercancel	-
// gotpointercapture	-
// lostpointercapture	-


//* Свойства событий указателя
// pointerId - уникальный id указателя события, генерируемый браузером
// pointerType - тип указывающего устройства: mouse, pen, touch
// isPrimary - true для первого пальца на multi-touch
// width/height - ширина/высота клика, для мыши равна 1
// pressure - степень давления указателя от 0 до 1, для мыши 0 или 0.5 для нажатой
// tangentialPressure – нормализованное тангенциальное давление
// tiltX, tiltY, twist – специфичные для пера свойства, описывающие положение пера относительно сенсорной поверхности


//* Мульти-тач первым касанием генерирует isPrimary - true и pointerId
//* после этого каждое следующее касание будет isPrimary - false с новым pointerId
//* пока все касания не покинут экран
//* клики мышью всегда генерируют одинаковый pointerId с isPrimary - true


//* pointerCancel срабатывает, когда нажатие прервано переворачиванием, выключением
//* или другим вмешательством в нормальную работу
//* также может быть вызвано браузером
// Чтобы браузер не перехватывал событие drag'n'drop в css у элемента надо указать touch-action: none


//* elem.setPointerCapture(pointerId) - привязывает текущее положение указателя к elem,
//* что облегчает работу с drag'n'drop потому что его не надо привязывать к document
// связь отменяется pointerup
// если elem удалён
// если был вызов elem.releasePointerCapture(pointerId)

// при захвате есть 2 события: gotpointercapture при начинании удержания
// lostpointercapture когда разрыв произошёл через releasePointerCapture или pointerup/pointercancel