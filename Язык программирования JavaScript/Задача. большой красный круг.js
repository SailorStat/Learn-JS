let transDuration = 2
let circle = document.createElement("div")
circle.style.width = "500px"
circle.style.height = "500px"
circle.style.backgroundColor = 'red'
circle.style.margin = "40px auto"
circle.style.borderRadius = '50%'
circle.style.transition = `width ${transDuration}s linear, height ${transDuration}s linear`

document.getElementById("main").appendChild(circle);

function bigCircle() {
  new Promise((resolve) => {
    circle.style.position = "relative"
    circle.style.width = "800px",
    circle.style.height = "800px",
    circle.setAttribute('id', "textInCircle"),
    setTimeout(() => resolve(), transDuration * 1000)
  })
  .then(function () {
    let textInCircle = document.createElement("div")
    textInCircle.style.position = "absolute"
    textInCircle.style.top = "50%"
    textInCircle.style.left = "50%"
    textInCircle.style.transform = "translate(-50%, -50%)"
    textInCircle.style.fontSize = "50px"
    textInCircle.style.color = "black"
    textInCircle.style.textAlign = "center"
    textInCircle.innerHTML = "Я вырос,<br>я большой"
    
    document.getElementById("textInCircle").appendChild(textInCircle);
  })
}