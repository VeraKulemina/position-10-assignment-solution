
// alert("this works!");
let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
// console.dir(backdrop);
let no = document.querySelector(".modal__action--negative");
let toggleButton = querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

selectPlanButton = document.querySelectorAll(".plan button")

console.dir(no);

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener("click", function() {
        modal.style.display = "block";
        backdrop.style.display = "block";

    });
};

no.addEventListener("click", function(){
    mobileNav.style.display = "none";
    close();

});

backdrop.addEventListener("click", close);

function close() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}

ntoggleButton.addEventListener("click", function(){
    mobileNav.style.display = "block";
    backdrop.style.display = "block";

});
