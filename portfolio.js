function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  const ham = document.querySelector(".ham");
  ham.style.display = "none";
  document.body.style.overflowY = "hidden";
}
function hidesidebar(e) {
  e.preventDefault();
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  const ham = document.querySelector(".ham");
  ham.style.display = "flex";
  document.body.style.overflowY = "scroll";
}

const ham = document.querySelector(".ham");
ham.addEventListener("click", showsidebar);
const cross = document.querySelector(".cross");
cross.addEventListener("click", hidesidebar);
