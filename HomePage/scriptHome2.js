let peachhover = document.querySelector(".mascot");
let light = document.querySelector(".light");
let clickme = document.querySelector(".clickme")

console.log("test");
console.log(peachhover);

peachhover.addEventListener("mouseover", function () {
    console.log("hovered!");
    light.style.left = "150px";
    light.style.top = "-25px";
    clickme.style.top = "200px";
    light.style.opacity = "1";
    clickme.style.opacity = "1";
});

peachhover.addEventListener("mouseout", function () {
    console.log("exit!");
    light.style.left = "50px";
    light.style.top = "50px";
    clickme.style.top = "150px";
    light.style.opacity = "0";
    clickme.style.opacity = "0";
});

let isihover = document.querySelectorAll(".isi");


isihover.forEach((isi) => {
    isi.addEventListener("mouseover", () => {
        isi.style.left = "25px";
        isi.style.bottom = "30px";
    });
    isi.addEventListener("mouseout", () => {
        isi.style.left = "0px";
        isi.style.bottom = "0px";
    });
});

const isihover1 = document.querySelector(".isi1");
const isihover2 = document.querySelector(".isi2");

const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");

isihover1.addEventListener("mouseover", () => {
    icon1.style.transform = "translateX(275px)";
});
isihover1.addEventListener("mouseout", () => {
    icon1.style.transform = "translateX(0px)";
});

isihover2.addEventListener("mouseover", () => {
    icon2.style.transform = "translateX(275px)";
});
isihover2.addEventListener("mouseout", () => {
    icon2.style.transform = "translateX(0px)";
});

function linktoLearn(){
    window.location.replace("../LearningPage/indexPickLanguage.html");
  }
  
function linktoHome() {
    window.location.replace("../HomePage/indexHome2.html");
}

function linktoFAQ() {
    window.location.replace("../FAQPage/indexFAQ.html");
}

function popup() {
    window.location.replace("#popup1");
}

function linktoProfile() {
    window.location.replace("../LoginPage/indexRegister.html");
}

function linktoEditProfile() {
    window.location.replace("../LoginPage/indexRegister.html");
}

function linktoLogIn() {
    window.location.replace("../LogInPage/indexRegister.html");
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
        console.log("dropdown activated");
        select.classList.toggle("select-clicked");
        menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            selected.innerText = option.innerText;
            select.classList.remove("select-clicked");
            menu.classList.remove("menu-open");

            options.forEach((option) => {
                option.classList.remove("dragdown-active");
            });
            option.classList.add("dragdown-active");
        });
    });
});