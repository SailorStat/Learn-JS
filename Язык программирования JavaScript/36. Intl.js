//? Intl
// Intl позволяет поддерживать формат в зависимости от места применения
let nowDate = Date.now()
let ruFormat = new Intl.DateTimeFormat('ru', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})
let enFormat = new Intl.DateTimeFormat('en-US', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})
console.log(ruFormat.format(nowDate))
console.log(enFormat.format(nowDate))

let animals = ["тигр", "еж", "енот", "ехидна", "АИСТ", "ЯК", "её", "ее", "ёж"];

let collator = new Intl.Collator('ru', {sensitivity: 'accent'})
animals.sort(function (a, b) {
  if (b[0] == "ё" && a[0] == "е") return -1
  if (a[0] == "ё" && b[0] == "е") return 1

  return collator.compare(a, b)
})

console.log( animals )