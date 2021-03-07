// Сейчас
let now = new Date();

// 1 января 1970 по UTC-0
let jun1970 = new Date(0)

// Таймстамп - время с 1 января 1970 по UTC-0 до сейчас в миллисекундах // 2 января
let jun2 = new Date(24 * 3600 * 1000)

// Даты до 1 января 1970 - отрицательные
let dec31 = new Date(-24 * 3600 * 1000)

// Даты из строки 'читаются'
let sum2020 = new Date('2020-06-01')

//  Дату можно задать перечиследнием значений: new Date(year, month, date, hours, minutes, seconds, ms)
////  По текущему поясу
//  year - 4 цифры
//  month - 0(jun)-11(dec)
//  date - c 1(по умолчанию)
//  hour, minutes, second, ms - c 0 (по умолчанию)
let dr = new Date(1996, 1, 7, 6, 32, 5, 232)

// Получение компонента даты
let year = dr.getFullYear()
let month = dr.getMonth()
let date = dr.getDate()
let hour = dr.getHours()
let minutes = dr.getMinutes()
let seconds = dr.getSeconds()
let milliseconds = dr.getMilliseconds()
let dayOfWeek = dr.getDay()

// Время по UTC-0
let utcHour = dr.getUTCHours()

// Время с 1 января 1970 по дату
let time = dr.getTime()

// Разница времени с UTC-0
let timeDifference = dr.getTimezoneOffset()

// Присвоение врмени
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
//setTime(milliseconds)
let dr2020 = new Date(dr.setFullYear(2020))

// Автоисправление даты
let crazyJun = new Date(2020, 0, 32) //  Feb 01 2020


// Измерение длительности вычисления функции
let start = new Date()
for (let i = 0; i < 100000; i++) {
  let squareNum = i * i * i * i * i * i * i * i;
}
let end = new Date()
console.log(`вычисления прошли за ${end - start} миллисекунд`)

// Можно создать текущее время и другим способом
let now2 = Date.now()

// Date.parse(str) принимает строку  формата YYYY-MM-DDTHH:mm:ss.sssZ и возвращает таймстамп
let myDr = new Date(Date.parse('2020-01-07T00:00:00.000'))
console.log(myDr)

// Создайте дату
let dateNew = new Date(2012, 01, 20, 3, 12)
console.log(dateNew)

// Покажите день недели
let dateTest = new Date(2012, 0, 3);  // 3 января 2012 года

getWeekDay(dateTest)
function getWeekDay(date) {
  let week = date.getDay()
  let nowWeekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return nowWeekDay[week]
}

// День недели в европейской нумерации
function getLocalDay(date) {
  if (date.getDay() == 0) return 7
  return date.getDay()
}

// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  let newDate = new Date(date)
  newDate.setDate(date.getDate() - days)
  return newDate.getDate()
}
getDateAgo(new Date(2015, 0, 2), 1)

// Последнее число месяца
function getLastDayOfMonth(year, month) {
  let date = new Date(0)
  date.setFullYear(year, month + 1)
  date.setDate(date.getDate() - 1)
  return date.getDate()
}
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// Сегодня прошло секунд
function getSecondsToday() {
  let now = Date.now()
  let nowDay = Date.now()
  nowDay.setHour(0, 0, 0)
  return Math.round((now - nowDay)/1000)
}

// Секунд до завтра
function getSecondsToday() {
  let now = Date.now()
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return Math.round((tomorrow - now)/1000)
}

// Формирование относительной даты
function formatDate(date) {
  let now = new Date()
  if (now - date < 1000) {
    return 'прямо сейчас'
  }

  if (now - date < 60000) {
    return `${Math.round((now - date)/1000)} сек. назад`
  }

  if (now - date < 360000) {
    return `${Math.round((now - date)/60000)} мин. назад`
  }

  let day = date.getDay() - 5
  if (`${day}`.length < 2) {
    day = '0' + day
  }

  let month = date.getMonth() + 1
  if (`${month}`.length < 2) {
    month = '0' + month
  }

  let year = toNum(date.getFullYear())
  function toNum(num) {
    let numArr = `${num}`.split('')
    num = `${numArr[2]}${numArr[3]}`
    return num
  }

  let minutes = date.getMinutes() - 11
  if (`${minutes}`.length < 2) {
    minutes = '0' + minutes
  }

  let second = date.getSeconds() - 11
  if (`${second}`.length < 2) {
    second = '0' + second
  }

  return `${day}.${month}.${year} ${minutes}:${second}`
}

// function formatDate(date) {
//   let diff = new Date() - date; // разница в миллисекундах

//   if (diff < 1000) { // меньше 1 секунды
//     return 'прямо сейчас';
//   }

//   let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

//   if (sec < 60) {
//     return sec + ' сек. назад';
//   }

//   let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
//   if (min < 60) {
//     return min + ' мин. назад';
//   }

//   // отформатировать дату
//   // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

//   // соединить компоненты в дату
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );