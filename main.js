//? Свойства узлов: тип, тек и содержимое
//* Классы DOM-узлов
// Верхний уровень узлов: EventTarget. От него наследуют Node и остальные DOM-узлы.
// EventTarget - не создаваемый класс, который служит для поддержки событий

// Node - тоже абстрактный класс, который служит для создания базовой функциональности:
// parentNode, nextSibling и др.
// От Node наследуют Text для текстов Element для узлов-элементов, Comment для комментариев

// Element - базовый класс DOM-элементов, который служит для нанавигации между ними.
// Он служит базой для SVGElement, XMLElement, HTMLElement.

// HTMLElement служит базовым классом для всех элементов:
// HTMLInputElement – класс для тега <input>, HTMLBodyElement – класс для тега <body> и т.д.

// Для input получается следующая цепочка родителей:
// Object             даёт базовые свойства объектов
// Eventtarget        даёт поддержку событий
// Node               даёт свойства DOM-узлов
// Element            даёт типовые методы элемента
// HTMLElement        даёт общие для HTML методы (геттеры и сеттеры)
// HTMLInputElement   даёт специфичные для элементов формы свойства
console.dir(document.body)
console.log(document.body)


//* NodeType
// Узнать тип элемента можно с помощью elem.nodeType
console.log(document.body.nodeType)
// const unsigned short ELEMENT_NODE = 1;
// const unsigned short ATTRIBUTE_NODE = 2;
// const unsigned short TEXT_NODE = 3;
// const unsigned short CDATA_SECTION_NODE = 4;
// const unsigned short ENTITY_REFERENCE_NODE = 5; // legacy
// const unsigned short ENTITY_NODE = 6; // legacy
// const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
// const unsigned short COMMENT_NODE = 8;
// const unsigned short DOCUMENT_NODE = 9;
// const unsigned short DOCUMENT_TYPE_NODE = 10;
// const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
// const unsigned short NOTATION_NODE = 12; // legacy


