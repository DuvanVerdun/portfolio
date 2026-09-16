const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const expandableImages = document.querySelectorAll(".expandable-image");

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  lightboxImage.src = "";
  document.body.style.overflow = "";
}

expandableImages.forEach((image) => {
  image.addEventListener("click", () => {
    openLightbox(image);
  });
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});