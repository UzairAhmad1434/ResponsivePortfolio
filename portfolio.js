gsap.registerPlugin(ScrollTrigger);
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

let logo = document.querySelector(".logo");

logo.innerHTML = logo.textContent
  .split("")
  .map((char) => `<span class="logo1">${char}</span>`)
  .join("");

const tl = gsap.timeline();

tl.to("#sidebar", {
  right: 0,
  duration: 0.3,
});
tl.from("li", {
  x: 100,
  stagger: 0.3,
  duration: 0.4,
});
tl.from(".cross", {
  y: -100,
  opacity: 0,
  duration: 0.4,
});

tl.pause();

const t2 = gsap.timeline();

t2.from(".logo1", {
  y: 40,
  duration: 0.4,
  opacity: 0.5,
  stagger: 0.3,
});
t2.from(".ham", {
  y: -50,
  stagger: 0.3,
  duration: 0.3,
});
t2.from(
  ".heading1",
  {
    x: -100,
    duratiiom: 0.3,
    opacity: 0,
  },
  "cls"
);
t2.from(".heading2", {
  x: -100,
  duratiiom: 0.3,
  opacity: 0,
});
t2.from(".heading3", {
  x: -100,
  duratiiom: 0.3,
  opacity: 0,
});
t2.from(".buttn", {
  x: -100,
  duratiiom: 0.3,
  opacity: 0,
  stagger: 0.3,
});
t2.from(
  ".imagehome",
  {
    x: 100,
    duratiiom: 0.2,
    opacity: 0,
  },
  "cls"
);

// const t3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".aboutsec",
//     scroller: "body",
//     start: "top 60%",
//     end: "top 100%",
//     scrub: 2,
//     // markers: true,
//   },
// });

// t3.from(
//   ".aboutimage",
//   {
//     x: -300,
//     duration: 0.5,
//     opacity: 0,
//     scale: 0.5,
//   },
//   "samee"
// );
// t3.from(
//   ".abouthead1",
//   {
//     x: 200,
//     duratiion: 0.3,
//     opacity: 0,
//   },
//   "samee"
// );
// t3.from(".abouthead2", {
//   x: 200,
//   duratiion: 0.3,
//   opacity: 0,
// });
// t3.from(".abouthead3", {
//   x: 200,
//   opacity: 0,
//   duratiion: 0.3,
// });
// t3.from(".bttn", {
//   x: 200,
//   duration: 0.2,
//   opacity: 0,
// });

const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contactpage",
    scroller: "body",
    start: "top 60%",
    end: "top 100%",
    scrub: 2,
    // markers: true,
  },
});
t5.from(".contactheading", {
  x: -200,
  duratiiom: 0.3,
  opacity: 0,
});
t5.from(".inp", {
  x: -200,
  duration: 0.3,
  opacity: 0,
  stagger: 0.3,
});
t5.from("#sumbit", {
  y: 100,
  duratiiom: 0.4,
  scale: 0.3,
  opacity: 0,
});

const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    scroller: "body",
    start: "top 60%",
    end: "top 100%",
    scrub: 2,
    // markers: true,
  },
});

t6.from(".serviceheading", {
  y: -200,
  duration: 0.6,
  scale: 0.4,
  opacity: 0,
  scrub: 5,
});

t6.from(".card", {
  y: -200,
  duration: 2,
  scale: 0.3,
  opacity: 0,
  stagger: 0.6,
});

t6.from(
  ".card-head",
  {
    x: -200,
    duration: 0.3,
    opacity: 0,
  },
  "card"
);

t6.from(
  ".card-para",
  {
    x: -200,
    duration: 0.3,
    opacity: 0,
  },
  "card"
);

t6.from(
  ".butn",
  {
    x: -200,
    duration: 0.3,
    opacity: 0,
  },
  "card"
);

let blogheading = document.querySelector(".blog_heading");

blogheading.innerHTML = blogheading.textContent
  .split("")
  .map((char) => `<span class="spanheading">${char}</span>`)
  .join("");
let spanheading = document.querySelector(".spanheading");

const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog",
    scroller: "body",
    start: "top 60%",
    end: "top 100%",
    scrub: 2,
    // markers: true,
  },
});
t4.from(".spanheading", {
  y: -30,
  duratiion: 1,
  stagger: 0.5,
  opacity: 0,
});
