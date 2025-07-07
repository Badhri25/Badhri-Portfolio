// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Theme toggle functionality
const themeToggle = document.querySelector("#theme-toggle");
const rootElement = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  rootElement.setAttribute("data-theme", savedTheme);
  themeToggle.innerHTML = savedTheme === "light" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
} else {
  rootElement.setAttribute("data-theme", "dark");
}
themeToggle.addEventListener("click", () => {
  const currentTheme = rootElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  rootElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.innerHTML = newTheme === "light" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  element.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

// Initialize Particle.js
particlesJS.load("particles-js", "particles.json", function () {});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill-bar .progress');
function animateSkillBars() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Contact Form Submission (Demo)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name && email && message) {
    alert('Message sent successfully! (Demo)');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Load More Projects (Demo)
document.getElementById('load-more').addEventListener('click', function () {
  const newProjects = [
    { title: 'New Project 1', description: 'Description of new project 1.' },
    { title: 'New Project 2', description: 'Description of new project 2.' },
  ];
  const projectCards = document.querySelector('.project-cards');
  newProjects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <div class="card-back">
          <h3>More Info</h3>
          <p>Coming soon...</p>
        </div>
      </div>
    `;
    projectCards.appendChild(card);
  });
});

// Scroll Indicator
window.addEventListener("scroll", () => {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (window.scrollY / scrollHeight) * 100;
  scrollIndicator.style.width = scrollPercent + "%";
});
