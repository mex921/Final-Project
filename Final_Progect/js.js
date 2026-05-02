let anima = document.querySelector('.anima')
anima.addEventListener('mousedown', function(){
    anima.style.transorm = 'scale(2)'
})
anima.addEventListener('mousedown', function(){
    anima.style.transorm = 'scale(1)'
})

let picture = document.getElementById("picture8");

let x = 0, y = 0;
let targetX = 0, targetY = 0;
let t = 0;

document.addEventListener("mousemove", (e) => {
    targetX = (e.clientX - window.innerWidth / 2) / 25;
    targetY = (e.clientY - window.innerHeight / 2) / 25;
})

function animate(){
    x += (targetX - x) * 0.08;
    y += (targetY - y) * 0.08;

    t += 0.03;
    let floatY = Math.sin(t) * 15;

    picture.style.transform = `
    translate(${x}px, ${y + floatY}px)
    rotateY(${x}deg)
    rotateX(${-y}deg)
    scale(1.05)
    `;

    requestAnimationFrame(animate);
}

animate()

let picture2 = document.querySelector(".am1")

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 50 
    let y = (window.innerHeight / 2 - e.clientY) / 50
    picture2.style.transform = `
    scale(1.05)
    translate(${x}px, ${y}px)
    `
})

let picture3 = document.querySelector(".am2")

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 50
    let y = (window.innerHeight / 2 - e.clientY) / 50
    picture3.style.transform = `
    scale(1.05)
    translate(${x}px, ${y}px)
    `
})

let picture4 = document.querySelector(".am3")

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 50
    let y = (window.innerHeight / 2 - e.clientY) / 50
    picture4.style.transform = `
    scale(1.05)
    translate(${x}px, ${y}px)
    `
})

let img = document.getElementById("img")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let img5 = document.getElementById("img5")
window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    img.style.transform = `
    translateX(${scroll* -0.07}px)
    `
    img.style.transition = "transform 4s ease-in"
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    img1.style.transform = `
    translateX(${scroll* 0.07}px)
    `
    img1.style.transition = "transform 4s ease-in"
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    img2.style.transform = `
    translateX(${scroll* -0.07}px)
    `
    img2.style.transition = "transform 4s ease-in"
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    img3.style.transform = `
    translateX(${scroll* 0.07}px)
    `
    img3.style.transition = "transform 4s ease-in"
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    img4.style.transform = `
    translateX(${scroll* -0.07}px)
    `
    img4.style.transition = "transform 4s ease-in"
})

window.addEventListener("scroll", () => {
    let scroll = window.scrollY
    img5.style.transform = `
    translateX(${scroll* 0.07}px)
    `
    img5.style.transition = "transform 4s ease-in"
})