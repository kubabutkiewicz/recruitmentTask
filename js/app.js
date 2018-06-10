const hamburger = document.querySelector(".hamburger");

function openMenu() {
  const menu = document.querySelector(".menu");
  const icon = document.querySelector(".fas");

  menu.classList.toggle("open");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}

function changeBackground() {
  const nav = document.querySelector(".main-nav ");
  if(window.scrollY > 520) {
    nav.style.backgroundColor = '#1E3066'
    nav.style.transition = 'all 0.3s ease-in-out';
  } else {
    nav.style.backgroundColor = 'transparent'
    nav.style.transition = 'all 0.3s ease-in-out';

  }
}

hamburger.addEventListener("click", openMenu);
window.addEventListener("scroll", changeBackground);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
