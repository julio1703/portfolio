const buttons = Array.from(document.querySelectorAll(".button"));
const cards = Array.from(document.querySelectorAll(".card"));
const buttons1 = Array.from(document.querySelectorAll(".button1"));
let open = -1;
let cooldown = false;
function func(open) {
  cards[open].style.transition = "0s";
  cards[open].style.opacity = "0";
  cards[open].style.left = "65%";
  cards[open].style.top = "-51%";
  cooldown = false;
}
buttons.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    if (cooldown) return;
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
    if (cooldown) return;
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
