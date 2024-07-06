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
