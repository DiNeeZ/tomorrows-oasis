const navLinks = document.querySelectorAll('.nav__link');
const currLocation = window.location.pathname;

navLinks.forEach((link) => {
  const path = new URL(link.href).pathname;
  if (link.classList.contains('active')) link.classList.remove('active');
  if (currLocation === path) link.classList.add('active');
});
