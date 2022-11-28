import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const picsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href= ${original} >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt= "${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", `${picsMarkup}`);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const target = event.target;

  manageModal(target);
});

function manageModal(element) {
  const modalImgMarkUp = basicLightbox.create(
    `<img
     src=${element.dataset.source}
    alt= "${element.alt}"
    />`
  );

  modalImgMarkUp.show();

  const isModalShown = modalImgMarkUp.show();

  if (isModalShown) {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modalImgMarkUp.close();
      }
    });
  }
}
