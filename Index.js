const buttons = Array.from(document.querySelectorAll(".button"));
const cards = Array.from(document.querySelectorAll(".card"));
const buttons1 = Array.from(document.querySelectorAll(".button0"));
const x = window.matchMedia("(max-width: 665px) ");
const zoomCard = document.querySelector(".zoomed-card");
const exitIcon = document.querySelector(".exit-icon");
let isZoomCardOpen = false;
let open = -1;
let cooldown = false;
function openCard() {
  if (isZoomCardOpen) return;
  isZoomCardOpen = true;
  Array.from(this.children).forEach((child) => {
    let cloneCard = child.cloneNode(true);
    if (x.matches) {
      cloneCard.children[0].style["font-size"] = "140%";
      cloneCard.style["font-size"] = "125%";
    } else {
      cloneCard.children[0].style["font-size"] = "200%";
      cloneCard.style["font-size"] = "150%";
    }
    cloneCard.style.color = "black";
    console.log(cloneCard);
    cloneCard.style.margin = "0%";
    zoomCard.appendChild(cloneCard);
  });
  zoomCard.style["z-index"] = "2";
  zoomCard.style.opacity = "1";
}
function closeCard() {
  zoomCard.style.opacity = "0";
  Array.from(zoomCard.children).forEach((elem) => {
    if (!elem.classList.contains("exit-icon")) elem.remove();
  });
  zoomCard.style["z-index"] = "-1";
  isZoomCardOpen = false;
}
cards.forEach((elem) => {
  elem.addEventListener("click", openCard);
});

exitIcon.addEventListener("click", closeCard);
function func(open) {
  if (x.matches) {
    cards[open].style.left = "52%";
  } else {
    cards[open].style.left = "65%";
  }
  cards[open].style.transition = "0s";
  cards[open].style.opacity = "0";
  cards[open].style.top = "-75vh";
  cooldown = false;
}
buttons.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    if (cooldown || isZoomCardOpen) return;
    if (open > -1) {
      cards[open].style.left = "100%";
      cooldown = true;
      setTimeout(func, 1050, open);
    }
    if (index == open) {
      open = -1;
      return;
    }
    console.log(index);
    cards[index].style.transition = "1s";
    cards[index].style.opacity = "1";
    cards[index].style.top = "5%";
    open = index;
  });
});
buttons1.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    if (cooldown || isZoomCardOpen) return;
    if (open > -1) {
      cards[open].style.left = "100%";
      cooldown = true;
      setTimeout(func, 1050, open);
    }
    if (index == open) {
      open = -1;
      return;
    }
    console.log(index);
    cards[index].style.transition = "1s";
    cards[index].style.opacity = "1";
    cards[index].style.top = "5%";
    open = index;
  });
});
