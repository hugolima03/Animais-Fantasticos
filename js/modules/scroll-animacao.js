// Animação de sections
export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopDistance = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTopDistance - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}