const pages = [
  { image: "images/page1.jpg", caption: "Травка, место где всё началось…" },
  { image: "images/page2.jpg", caption: "Вторая глава нашей истории…" },
  { image: "images/page3.jpg", caption: "И вот мы вместе до сих пор ❤️" }
];

let currentPage = 0;

function updatePage() {
  const imgEl = document.getElementById("page-image");
  const captionEl = document.getElementById("page-caption");
  imgEl.src = pages[currentPage].image;
  captionEl.textContent = pages[currentPage].caption;
}

function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  updatePage();
}

function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  updatePage();
}

window.onload = updatePage;
