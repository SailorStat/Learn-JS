//? Возобновляемая загрузка файлов
//* Не очень полезное событие progress - не подходит


//* Алгоритм
//*   1. Создадим уникальный идентификатор для файла, который собираемся загружать
// let fileId = file.name + '-' + file.size + '-' + +file.lastModifiedDate
// если имя, размер или дата у файла изменятся, то изменится и fileId

//*   2. Посылаем запрос серверу с просьбой указать количество полученных байт
// const response = await fetch('status', {
//   headers: {
//     'X-File-Id': fileId
//   }
// })

// const startByte = +await response.text()

//*   3. Используем метод slice объекта Blob, чтобы отправить данные начиная с startByte
// xhr.open('POST', 'upload')
// xhr.setRequestHeader('X-File-Id', fileId)
// xhr.setRequestHeader('X-Start-Byte', startByte)
// xhr.upload.onprogress = (e) => {
//   console.log('Uploaded ' + (startByte + e.loaded) + ' of ' + (startByte + e.total))
// }
// xhr.send(file.slice(startByte))