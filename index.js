const yesBtn = document.getElementById("YesBtn")
const noBtn = document.getElementById("NoBtn")

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