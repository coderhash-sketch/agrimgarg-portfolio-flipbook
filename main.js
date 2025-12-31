const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach(btn => {
  btn.onclick = () => {
    const page = document.getElementById(btn.dataset.page);
    page.classList.toggle("turn");
  };
});

const contactBtn = document.querySelector(".contact-me");
const pages = document.querySelectorAll(".book-page.page-right");

contactBtn.onclick = () => {
  pages.forEach((page, i) => {
    setTimeout(() => page.classList.add("turn"), i * 200);
  });
};
