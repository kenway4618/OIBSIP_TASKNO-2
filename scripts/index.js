const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar2");
  const navLinks = document.querySelectorAll(".nav-bar2 li");
  
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
    
    // Burger Animation
    burger.classList.toggle("toggle");
  })

  navLinks.forEach(n => n.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
      }
    });
  }));
}

navSlide();

// const normal = () => {
//   document.querySelectorAll(".nav-bar2 li").forEach(n => n.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//     burger.classList.toggle("toggle");
//   }));
// }

// const app = () => {
//   navSlide();
//   normal();
// }

// app();


const darkMode = document.getElementById("light-dark");

const darkModeToggle = () => {

  const main = document.querySelector("main");

  main.classList.toggle("body2");
};

darkMode.addEventListener("click", darkModeToggle);

// Enlarge Project Screenshot Image when clicked

const enlargeImage = () => {
  const image = document.querySelectorAll("figure img");
  const figure = document.querySelectorAll("figure");

  figure.forEach(fig => fig.addEventListener("click", () => {
    fig.classList.toggle("figure3");
  }));

  image.forEach(img => img.addEventListener("click", () => {
    img.classList.toggle("figure2");
  }));
}

enlargeImage();


