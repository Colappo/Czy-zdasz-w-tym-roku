const yesBtn = document.getElementById("YesBtn")
const noBtn = document.getElementById("NoBtn")
const decorate1 = document.getElementById("decorate1")
const decorate2 = document.getElementById("decorate2")
const decorate3 = document.getElementById("decorate3")

function randomSize() {
    return Math.floor(Math.random() * (400 - 100 + 1) - 100);
}

function randomX() {
    return Math.floor(Math.random() * (30-(-30)+1) - 30);
}

function randomY(){
    return Math.floor(Math.random() * (30-(-30)+1) - 30);
}

decorate1.style.height = randomSize() + "px"
decorate1.style.width = decorate1.style.height
decorate1.style.transform = "translateX(" + randomX() + "vw) " + "translateY(" + randomY() + "vh)"
decorate2.style.height = randomSize() + "px"
decorate2.style.width = decorate2.style.height
decorate2.style.transform = "translateX(" + randomX() + "vw) " + "translateY(" + randomY() + "vh)"
decorate3.style.height = randomSize() + "px"
decorate3.style.width = decorate3.style.height
decorate3.style.transform = "translateX(" + randomX() + "vw) " + "translateY(" + randomY() + "vh)"

function move1() {
    let X = Math.floor(Math.random() * (30-(-30)+1) - 30);
    let Y = Math.floor(Math.random() * (30-(-30)+1) - 30);

    yesBtn.style.transform = "translateX(" + X + "vw) " + "translateY(" + Y + "vh)"
}

function move2() {
    let X = Math.floor(Math.random() * (30-(-30)+1) - 30);
    let Y = Math.floor(Math.random() * (30-(-30)+1) - 30);

    noBtn.style.transform = "translateX(" + X + "vw) " + "translateY(" + Y + "vh)"
}

yesBtn.addEventListener("mousemove", move1)
noBtn.addEventListener("mousemove", move2)

