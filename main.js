//make it so it scrolls infinitely, like a circle

const box0 = document.getElementById("box0");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

function changeColor1(event){
    event.target.style.backgroundColor="lightsalmon";
}

function changeColor2(event){
    event.target.style.backgroundColor="burlywood";
}

function start() {
    var current = document.getElementById("chapter_0");
    var next = document.getElementById("chapter_3");
    current.style.display = "none";
    next.style.display = "block";
}

function three_to_ten() {
    var current = document.getElementById("chapter_3");
    var next = document.getElementById("chapter_10");
    current.style.display = "none";
    next.style.display = "block";
}

function ten_to_five() {
    var current = document.getElementById("chapter_10");
    var next = document.getElementById("chapter_5");
    current.style.display = "none";
    next.style.display = "block";
}

function five_to_sixteen() {
    var current = document.getElementById("chapter_5");
    var next = document.getElementById("chapter_16");
    current.style.display = "none";
    next.style.display = "block";
}

function sixteen_to_eight() {
    var current = document.getElementById("chapter_16");
    var next = document.getElementById("chapter_8");
    current.style.display = "none";
    next.style.display = "block";
}

function eight_to_four() {
    var current = document.getElementById("chapter_8");
    var next = document.getElementById("chapter_4");
    current.style.display = "none";
    next.style.display = "block";
}

function four_to_two() {
    var current = document.getElementById("chapter_4");
    var next = document.getElementById("chapter_2");
    current.style.display = "none";
    next.style.display = "block";
}

function two_to_one() {
    var current = document.getElementById("chapter_2");
    var next = document.getElementById("chapter_1");
    current.style.display = "none";
    next.style.display = "block";
}

function one_to_four() {
    var current = document.getElementById("chapter_1");
    var next = document.getElementById("chapter_4");
    current.style.display = "none";
    next.style.display = "block";
}

function one_to_end() {
    var current = document.getElementById("chapter_1");
    var next = document.getElementById("end");
    current.style.display = "none";
    next.style.display = "block";
}

box0.addEventListener("mouseover", changeColor1)
box0.addEventListener("mouseout", changeColor2)

box1.addEventListener("mouseover", changeColor1)
box1.addEventListener("mouseout", changeColor2)

box2.addEventListener("mouseover", changeColor1)
box2.addEventListener("mouseout", changeColor2)

box3.addEventListener("mouseover", changeColor1)
box3.addEventListener("mouseout", changeColor2)

box4.addEventListener("mouseover", changeColor1)
box4.addEventListener("mouseout", changeColor2)

box5.addEventListener("mouseover", changeColor1)
box5.addEventListener("mouseout", changeColor2)

box6.addEventListener("mouseover", changeColor1)
box6.addEventListener("mouseout", changeColor2)

box7.addEventListener("mouseover", changeColor1)
box7.addEventListener("mouseout", changeColor2)

box8.addEventListener("mouseover", changeColor1)
box8.addEventListener("mouseout", changeColor2)

box9.addEventListener("mouseover", changeColor1)
box9.addEventListener("mouseout", changeColor2)

//Ok I just want to say that I am cognisant that the style for this code is really bad
//1. there are no comments
//2. I copied and pasted the same thing over and over again without refactoring
//3. everything is organised nonsensically
//However

//

// . . .