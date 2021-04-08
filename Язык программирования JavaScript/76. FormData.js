//? FormData
//* const formData = new FormData([form])
// Если в коструктор передать элемент HTML-формы, то создаваемый объект автоматически прочитает из неё поля
// в body у fetch позволяет указать FormData
// Он будет закодирован и отправлен с заголовком Content-Type: form/multipart
// Для сервера это обычная отправка формы
{
document.body.innerHTML = '<form id="formElem"> <input type="text" name="name" value="John"> <input type="text" name="surname" value="Smith"> <input type="submit"></form>'
formElem.onsubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: new FormData(formElem)
  })
  let result = await response.json();

  console.log(result);
}
}

//* Методы FormData
// formData.append(name, value) - добавляет к объекту поле с имененм name и значением value
// formData.append(name, blob, filename) - добавляет к объекту поле name с файлом blob
//    и названием файлв filename, как если бы файл был так назван на устройстве
// formData.delete(name) - удаляет поле name
// formData.get(name) - получает занчение поля name
// formData.has(name) - наличие поля name

//TODO технически в форму можно добавить много полей с одинаковым name
// метод set вместо append гарантирует, что все одинаковые name будут удалены перед добавлением нового
{
const formData = new FormData()
formData.append('name', '1')
formData.append('name', '1')
formData.append('name', '1')
for ([key, value] of formData) {
  console.log(key, value)
}

formData.set('name', '2')
for ([key, value] of formData) {
  console.log(key, value)
}
}


//* Отправка формы файлом
// FormData отсылаются с заголовком Content-Type: form/multipart
//    это позволяет отправлять файлы. Даже прописывать не надо.
{
const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: new FormData(formElem)
})
}


//* Отправка формы с Blob-данными
// Хотя изображение и просто отправить, генерируя и отправляя url blob
//  ещё проще это делается в составе формы
{
async function submit() {
  const imageBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))

  const formData = new FormData()
  formData.set('image', imageBlob, 'image.png')
  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: new FormData(formData)
  })

  const result = await response.json()
}
}