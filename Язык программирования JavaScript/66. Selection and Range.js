//? Selection and range
// JS позволяет получить текущее выделение, выделить или снять текущее выделение

//* Range - диапазон между точками,
//* который создаётся без координат, а потом получает их со смещением к началу родителя
const range = new Range()
range.setStart(document.body, 1) // задаёт начало выделения
range.setEnd(document.body, 5) // задаёт конец выделения
console.log(range) // отображает выделенный фрагмент
document.getSelection().addRange(range) // выделяет фрагмент
// все браузеры, кроме Firefox поддерживают только 1 выделение одновременно
// при появлении нового выделения стврые снимаются

// start/endContainer и start/endOffset - начальные/конечные узел и смещение
// collapsed - если true, то range пуст
// commonAncestorContainer - близжайший общий предок для всех узлов


//* Методы Renge
// setStart/End(node, offset) - установить начало/конец в узле node в позицию offset
// setStart/EndBefore/After(node) - установаить начало/конец перед/после узла node
// для текстовых узлов offset пропускает количество символов, для элементов - количество дочерних узлов

// selectNode(node) - выделить node целиком
// selectNodeContents(node) - выделить всё содержимое node
// collapse() - если true, то становить конечную в начало, либо начальную в конец
// cloneRange() - создать новый диапазон с аналогичными границами

// маниппуляция содержимым
// deleteContents() - удалить сожержимое диапазона из документа
// extractContents() - удалить + вернуть, как DocumentFragment
// cloneContents() - скопировать и вернуть, как DocumentFragment
// insertNode(node) - вставить node в начале документа
// surroundContents(node) - обернуть node вокруг содержимого
//    Содержимое должно полностью содержать открывающие и закрывающие теги


//* Selection используется для выделения
// window/document.getSelection() - получить текущее выделение

//* Методы Selection
// anchor/focusNode - узел начала/конца выделения
// anchor/focusOffset - смещение начала/конца выделения
// isCollapaed - true, если выделения нет, или оно пустое
// rangeCount - максимум 1 (кроме Firefox)

// конец выделения может быть перед началом


//* События при выделении
// selectstart - начало выделения // preventDefault отменяет начало выделения
// selectionchange - выдление изменено // вешается только на document

//* Методы Selection для добавления и удаления диапазонов:
// getRangeAt(i) – взять i-ый диапазон, начиная с 0. Во всех браузерах, кроме Firefox, используется только 0.
// addRange(range) – добавить range в выделение. Все браузеры, кроме Firefox, проигнорируют этот вызов, если в выделении уже есть диапазон.
// removeRange(range) – удалить range из выделения.
// removeAllRanges() – удалить все диапазоны.
// empty() – сокращение для removeAllRanges.

// Также существуют методы управления диапазонами выделения напрямую, без обращения к Range:
// collapse(node, offset) – заменить выделенный диапазон новым, который начинается и заканчивается на node, на позиции offset.
// setPosition(node, offset) – то же самое, что collapse (дублирующий метод-псевдоним).
// collapseToStart() – схлопнуть (заменить на пустой диапазон) к началу выделения,
// collapseToEnd() – схлопнуть диапазон к концу выделения,
// extend(node, offset) – переместить фокус выделения к данному node, с позиции offset,
// setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) – заменить диапазон выделения на заданные начало anchorNode/anchorOffset и конец focusNode/focusOffset.
//    Будет выделено всё содержимое между этими границами
// selectAllChildren(node) – выделить все дочерние узлы данного узла node.
// deleteFromDocument() – удалить содержимое выделения из документа.
// containsNode(node, allowPartialContainment = false) – проверяет, содержит ли выделение node (частично, если второй аргумент равен true)


//* Выделение в элементах форм
//* Свойства:
// input.selectionStart – позиция начала выделения (это свойство можно изменять),
// input.selectionEnd – позиция конца выделения (это свойство можно изменять),
// input.selectionDirection – направление выделения, одно из: «forward» (вперёд), «backward» (назад) или «none» (без направления, если, к примеру, выделено с помощью двойного клика мыши).

//* События:
// input.onselect – срабатывает, когда начинается выделение.

//* Методы:
// input.select() – выделяет всё содержимое input (может быть textarea вместо input),
// input.setSelectionRange(start, end, [direction]) – изменить выделение, чтобы начиналось с позиции start, и заканчивалось end, в данном направлении direction (необязательный параметр).
// input.setRangeText(replacement, [start], [end], [selectionMode]) – заменяет выделенный текст в диапазоне новым.
//   Если аргументы start и end указаны, то они задают начало и конец диапазона, иначе используется текущее выделение.
//   Последний аргумент, selectionMode, определяет, как будет вести себя выделение после замены текста. Возможные значения:
//    "select" – только что вставленный текст будет выделен.
//    "start" – диапазон выделения схлопнется прямо перед вставленным текстом (так что курсор окажется непосредственно перед ним).
//    "end" – диапазон выделения схлопнется прямо после вставленного текста (курсор окажется сразу после него).
//    "preserve" – пытается сохранить выделение. Значение по умолчанию.


//* Сделать что-то невыделяемым user-select: none