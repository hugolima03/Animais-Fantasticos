// Links internos suaves
export default function initScrollToSection() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const SctionTopDistance = section.offsetTop;

    window.scrollTo({
      top: SctionTopDistance,
      behavior: "smooth",
    });

    console.log(section);
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}