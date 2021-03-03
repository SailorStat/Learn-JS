// JSON имеет 2 метода: JSON.stringify() - преобразование в строку и .parse() - преобразование в объект

// Преобразовать в JSON и обратно
let user = {
  name: "Василий Иванович",
  age: 35
};

let userJSON = JSON.stringify(user)
console.log(userJSON)
let userOld = JSON.parse(userJSON)
console.log(userOld)

// Удаление лишних значений
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let meetupNoCikl =  JSON.stringify(meetup, function replacer(key, value) {
  if (key != "" && value != meetup) return value
});
