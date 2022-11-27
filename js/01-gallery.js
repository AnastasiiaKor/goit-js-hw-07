import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const picsMarkUp = galleryItems
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

galleryEl.insertAdjacentHTML("beforeend", `${picsMarkUp}`);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains(".gallery__image")) {
    return;
  }

  const modalImg = basicLightbox.create(`<img
  //       src="${event.target.dataset.source}"
  //       alt= "${event.target.alt}"
  //     />`);

  modalImg.show();
});
