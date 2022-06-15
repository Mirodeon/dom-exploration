
const inputName = document.querySelector("#firstname");
const displayName = document.querySelector("#display-firstname");

inputName.addEventListener("keyup", () => {
    displayName.innerHTML = inputName.value;
})

const inputAge = document.querySelector("#age");
const section18 = document.querySelector("#a-hard-truth");

inputAge.addEventListener("keyup", () => {
    if (inputAge.value >= 18) {
        section18.style.visibility = "visible";
    }
    else {
        section18.style.visibility = "hidden";
    }
});

const inputMdp = document.querySelector("#pwd");
const confirmMdp = document.querySelector("#pwd-confirm");

inputMdp.addEventListener("keyup", () => {
    if (0 < inputMdp.value.length < 6) {
        inputMdp.style.backgroundColor = "red";
    }
    if (inputMdp.value.length >= 6) {
        inputMdp.style.backgroundColor = "green";
    }
    if (inputMdp.value.length <= 0) {
        inputMdp.style.backgroundColor = "white";
    }
});

confirmMdp.addEventListener("keyup", () => {
    if (confirmMdp.value != inputMdp.value) {
        confirmMdp.style.backgroundColor = "red";
    }
    if (confirmMdp.value === inputMdp.value) {
        confirmMdp.style.backgroundColor = "green";
    }
    if (confirmMdp.value.length < 1) {
        confirmMdp.style.backgroundColor = "white";
    }
});

const theme = document.querySelector("#toggle-darkmode");

theme.addEventListener("change", () => {
    if (theme.value == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } 
    if (theme.value == "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});