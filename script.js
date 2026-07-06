const title = document.querySelector("h1");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  title.style.transform = `translate(${x}px, ${y}px)`;
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const imageSrc = card.getAttribute("data-preview");

  card.addEventListener("mouseenter", () => {
    card.style.backgroundImage = `
      linear-gradient(
        rgba(5, 5, 5, 0.55),
        rgba(5, 5, 5, 0.55)
      ),
      url("${imageSrc}")
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.backgroundImage = "none";
  });
});