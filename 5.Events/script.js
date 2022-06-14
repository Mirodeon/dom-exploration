
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

let setSquare = document.querySelector(".displayedsquare-wrapper");
let setUl = document.querySelector("ul");

const clickOnSquare = (e) => {
  let time = getElapsedTime();
  let color = e.target.classList[1];

  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  
  let addSquare = document.createElement("div");
  let addLi = document.createElement("li");

  setSquare.append(addSquare)
  addSquare.classList.add("displayedsquare", color)

  setUl.append(addLi)
  addLi.innerHTML = `${time} ${color} square`
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const showColor = (e)=>{
  let color = e.target.classList[1];
  return alert(color)
}
setSquare.addEventListener("click", showColor)

document.addEventListener("keyup", event => {
  let time = getElapsedTime();
  if (event.key === " ") {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    let color = `rgb(${r},${g},${b})`;
    document.body.style.background = color;

    let addLi = document.createElement("li");
    setUl.append(addLi);
    addLi.innerHTML = `${time} ${color} espace`;

    return;
  }
  
  if (event.key === "l") {
    let li = document.querySelectorAll("li")
    for (const iterator of li) {
      setUl.removeChild(setUl.firstElementChild)
    }
    
  }
  if (event.key === "s") {
    let squareDisplayed = document.querySelectorAll(".displayedsquare")
    for (const iterator of squareDisplayed) {
      setSquare.removeChild(setSquare.firstElementChild)
    }
  }
})

