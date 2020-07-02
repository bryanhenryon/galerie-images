const images = document.querySelectorAll(".image");
const modal = document.querySelector(".modal");
const fullImage = document.querySelector(".full-image");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    fullImage.classList.add("open");
    modal.classList.add("open");
    const srcClickedImage = e.target.getAttribute("src");
    const altClickedImage = e.target.getAttribute("alt");
    fullImage.setAttribute("src", srcClickedImage);
    fullImage.setAttribute("alt", altClickedImage);
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImage.classList.remove("open");
  }
});
