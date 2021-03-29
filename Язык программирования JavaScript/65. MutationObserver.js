//? MutationObserver - встроенный объект, закускающий callback в случае изменения DOM
//* Синтаксис
//* const observer = new MutationObserver(callback)
//* observer.observe(node, config)

// config - объект с параметрами, на которые надо реагировать
//    childList - изменения в непосредственных детях node
//    subtree - во всех потомках node
//    attributes - в атрибутах node
//    attributeFilter - массив имён атрибутов, чтобы наблюдать только за выбранными
//    characterData - наблюдать ли за node.data (текстовое содержимое)
//    characterDataOldValue - передавать в callback старое и новое значение node.data или только новое
//    characterOldValue - передавать в callback строе и новое значение атрибута или только новое


//* после изменения выполняется callback, в который 
//*   изменения передаются первым аргументом, как список объектов MutationRecords,
//*   наблюдатель идёт вторым аргументом


//* Свойства MutationRecords
// type - один из:
//    'attributes' - изменён атрибут
//    'characterData' - изменены elem.data для текстовых узлов
//    'childList' - добавлены или удалены дочерние элементы
// target - где произошло изменение
// added/removedNodes - добавленные/удалённые узлы
// previous/nextSibling - соседи для добавленных/удалённых узлов
// oldValue - предыдущее значение (только для атрибута и текста)

const div = document.createElement('div')
div.innerHTML = 'Редактируемое содержимое'
div.contentEditable = true
document.body.append(div)
const observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords)
})
observer.observe(div, {
  childList: true,
  subtree: true,
  characterDataOldValue: true
})


//* Применяется при интеграции, когда чужой скрипт добавляет и нужную, и ненужную функциональность
// С помощью обзервера можно отследить изменения DOM изменить их размер или удалить ненужное 


//* Дополнительные методы
// observer.disconnect() - останавлвает наблюдение
// multitationRecords = observer.takeRecords() - получить список необработанных изменений


//* Сборка мусора
// MutationObserver использует слабые ссылки на элементы,
// по-этому если DOM-узел удалён, то он будет удалён и из памяти