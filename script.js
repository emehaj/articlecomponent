const share = document.querySelector(".share");
const shareIcon = document.querySelector(".share-icon");
const socials = document.querySelector(".socials");
let windowWidth = window.innerWidth;

function shareClick() {
    if (window.innerWidth > 850) {
        socials.classList.toggle("active");
    } else {
        share.classList.toggle("shareSocials");
    }
}

shareIcon.addEventListener("click", shareClick);
