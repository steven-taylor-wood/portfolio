const title = document.querySelector("h1");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  title.style.transform = `translate(${x}px, ${y}px)`;
});

const projectCards = document.querySelectorAll(".project-card");
const preview = document.querySelector(".project-preview");
const previewImage = document.querySelector(".project-preview img");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const imageSrc = card.getAttribute("data-preview");

    previewImage.src = imageSrc;
    preview.classList.add("visible");
  });

  card.addEventListener("mouseleave", () => {
    preview.classList.remove("visible");
  });
});