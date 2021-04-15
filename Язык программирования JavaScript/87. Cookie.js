//? Куки, document.cookie
//* Куки - небольшие строки данных, которые храняться в браузере
//    Они являются частью HTTP-протокола, определённого в спецификации RFC 6265

// Создаются куки через заголовок Set-Cookie
// Добавляются куки через Cookie

// Наиболее частый случай использования:
//    1. При входе на сайт сервер отсылает в ответ заголовок Set-Cookie для того,
//        чтобы установить куки со специальным уникальным идентификатором сессии
//    2. Во время следующего запроса браузер посылает HTTP-заголовок Cookie
//    3. Сервер понимает, кто сделал запрос


//* Доступ к куки через document.cookie
// Куки состоит из пар ключ=значение, разделённых ;


//* Запись в document.cookie
// Запись в куки - это не просто данные, а гетеры и сетеры, которые обрабатываются особым образом
// Запись в куки обновит упомянутые куки, но не затронет остальные

// Запись куки через
document.cookie = 'user=Vitya'
// указанный ключ перезапишется

// для записи специальных символов нужно использовать encodeURIComponent
const category = 'your nickname'
const nickname = 'biggest gorilla'
document.cookie = encodeURIComponent(category) + '=' + encodeURIComponent(nickname)

//todo После кодирования куки не могут занимать больше 4кб

//todo Браузеры хранят не больше 20+ куки


// У куки есть ряд важных настроек
//* path - URL верхнего уровня пути, куки которого будут доступны
// обычно используется / , чтобы куки были доступны для всего сайта


//* domain - домен для доступа к куки
// По умолчанию куки доступны только для того же домена
// Чтобы домен 2-го уровня получил доступ к куки, на странице надо прописать в domain домен
// ..на site.com
document.cookie = 'user=John; domain=site.com'
// ..на forum.site.com
console.log(document.cookie) // содержит user=John


//* expires, msx-age - позволяют сохранить куки после закрытия браузера
// сохранить куки на 1 день
const date = new Date(Date.now() + 86400e3)
date = date.toUTCString()
document.cookie = "user=John; expires=" + date
// если axpires установить на текущую дату, то куки удалится

// max-age принимает значение времени в секундах
// max-age=0 удалит куки


//* secure - флаг запрета доступа http к куки https


//* samesite - настройка, которая применяется для защиты сайта от XSRF-атак
// Как работает атака
//    Вы на сайте банк.рф
//    Зашли на сайт злыдень.рф
//    Сайт злыдень.рф отправил от вашего имени запрос на банк.рф
//    злыдень.рф получет куки и отправляет форму дайденег
//    злыдень.рф получает деньги

// Настройка samesite
// samesite=strict || samesite - куки не отправляются, если пользователь пришёл с другого сайта
// samesite=lax - как и прошлый, но куки отправятся, если:
//    безопасные HTTP методы (не GET или POST)
//    операция осуществляет навиацию верхнего уровня (изменяет верхний URL на банк.рф)
//        в iframe куки не отправится, так как это не верхний уровень URL
//todo Старые браузеры не поддерживают такую защиту


//* httpOnly - запрещает JS видеть куки на странице


//* Приложение: функции для работы с куки
// Самый короткий способ для работы с куки - регулярные выражения

//* функция getCookie(name) возвращает значение name
function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

//* setCookie(name, value, options) устанавливает куки с именем name, значением value и настройками по умолчанию
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey
    const optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue
    }
  }

  document.cookie = updatedCookie
}
setCookie('user', 'John', {secure: true, 'max-age': 3600})

//* deleteCookie(name) - удаляет куки с полем name
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

//todo При операциях с куки нужно быть внимательным к месту хранения
// чтобы использовался один и тотже домен


//* Приложение: сторонние куки
// Куки называются сторонними, есои они размещены с домена, отличающегося от страницы,
//    которую посещает пользователь
// 1. site загружает банер с abs
// 2. Вместе с банером abs устанавливает куки
// 3. При следующем попадании на банер abs узнает пользователя
// 4. При заходе даже на другой сайт abs узнает пользователя
// Сторонние куки привязаны к исходному домену, по-этому abs может их отслеживать


//* Приложение: GDPR
// В Европе есть законодательство, которое запрещает без явного согласия использовать
//    авторизационные, отслеживающие, идентификационные куки
// В случае, если используются другие куки, то расзрешение не нужно
// Если такие данные используются только для авторизованных пользователей,
//    то обычно при регистрации нужно поставить галочку в политике конфиденциальности
// Если сайт хочет хранить куки для всех пользователей,
//    то при первом посещении сайта нужно подтвердить разрешение кликом на модальное окно