// script.js
const title = document.querySelector("h1");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  title.style.transform = `translate(${x}px, ${y}px)`;
});