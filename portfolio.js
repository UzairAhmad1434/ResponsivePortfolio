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

const tl = gsap.timeline();

tl.to("#sidebar", {
  right: 0,
  duration: 0.3,
});
tl.from("li", {
  x: 150,
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

t2.from(".logo", {
  y: -40,
  duration: 0.5,
});
t2.from(".ham", {
  y: -50,
  stagger: 0.3,
  duration: 0.5,
});
t2.from(
  ".heading1",
  {
    x: -200,
    duratiiom: 0.4,
    opacity: 0,
  },
  "cls"
);
t2.from(".heading2", {
  x: -200,
  duratiiom: 0.4,
  opacity: 0,
});
t2.from(".heading3", {
  x: -200,
  duratiiom: 0.3,
  opacity: 0,
});
t2.from(".buttn", {
  x: -200,
  duratiiom: 0.3,
  opacity: 0,
  stagger: 0.3,
});
t2.from(
  ".imagehome",
  {
    x: 200,
    duratiiom: 0.5,
    opacity: 0,
  },
  "cls"
);

// const t3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".aboutsec",
//     scroller: "body",
//     start: "top 60%",
//     end: "top 80%",
//     scrub: 2,
//     // markers: true,
//   },
// });

// t3.from(
//   ".abouthead1",
//   {
//     x: 200,
//     duratiiom: 1,
//     opacity: 0,
//   },
//   "cls"
// );
// t3.from(".abouthead2", {
//   x: 200,
//   duratiiom: 1,
//   opacity: 0,
// });
// t3.from(".abouthead3", {
//   x: 200,
//   duratiiom: 1,
//   opacity: 0,
// });
// t3.from(".bttn", {
//   x: 200,
//   duratiiom: 1,
//   opacity: 0,
//   stagger: 0.3,
// });
// t3.from(
//   ".aboutimage",
//   {
//     x: -200,
//     duratiiom: 1,
//     opacity: 0,
//   },
//   "cls"
// );

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
t4.from(".blog_heading", {
  y: -200,
  duratiiom: 0.8,
  opacity: 0,
});
t4.from(".span1", {
  x: 500,
  duratiiom: 0.8,
  opacity: 0,
});

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
  duratiiom: 0.8,
  opacity: 0,
});
t5.from(
  ".inp",
  {
    x: -200,
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
  },
  "same"
);
t5.from(
  "#sumbit",
  {
    y: -200,
    duratiiom: 0.4,
    opacity: 0,
  },
  "same"
);

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
  x: -200,
  duration: 0.6,
  opacity: 0,
});

t6.from(".card", {
  y: -200,
  duration: 0.7,
  scale: 0.3,
  opacity: 0,
  stagger: 0.3,
});

t6.from(
  ".card-head",
  {
    x: -200,
    duration: 0.1,
    opacity: 0,
  },
  "card"
);

t6.from(
  ".card-para",
  {
    x: -200,
    duration: 0.1,
    opacity: 0,
  },
  "card"
);

t6.from(
  ".butn",
  {
    x: -200,
    duration: 0.1,
    opacity: 0,
  },
  "card"
);
