function showsidebar() {
  tl.play();
  document.body.style.overflowY = "hidden";
}
function hidesidebar(e) {
  tl.reverse();
  document.body.style.overflowY = "scroll";
}

const ham = document.querySelector(".ham");
ham.addEventListener("click", showsidebar);
const cross = document.querySelector(".cross");
cross.addEventListener("click", hidesidebar);

const circle = document.querySelector(".circle");
const boxx = document.querySelector(".circle-box");

boxx.addEventListener("mousemove", (e) => {
  gsap.to(circle, {
    x: e.x,
    y: e.y,
    duration: 0.2, // Increase duration for smoother movement
    ease: "power2.out", // Use a different easing function
  });
});

const tl = gsap.timeline();

tl.to("#sidebar", {
  right: 0,
  duration: 0.5,
});
tl.from("li", {
  x: 150,
  stagger: 0.3,
  duration: 0.6,
});
tl.from(".cross", {
  y: -100,
  opacity: 0,
  duration: 0.6,
});

tl.pause();

const t2 = gsap.timeline();

t2.from(".logo", {
  y: -40,
  duration: 0.5,
});
t2.from(".ham", {
  y: -50,
  stagger: 0.3,
  duration: 0.6,
});
t2.from(
  ".heading1",
  {
    x: -200,
    duratiiom: 0.8,
    opacity: 0,
  },
  "cls"
);
t2.from(".heading2", {
  x: -200,
  duratiiom: 0.8,
  opacity: 0,
});
t2.from(".heading3", {
  x: -200,
  duratiiom: 0.8,
  opacity: 0,
});
t2.from(".btn", {
  x: -200,
  duratiiom: 0.8,
  opacity: 0,
  stagger: 0.3,
});
t2.from(
  "img",
  {
    x: 200,
    duratiiom: 0.8,
    opacity: 0,
  },
  "cls"
);
