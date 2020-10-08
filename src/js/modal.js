import * as basicLightbox from "basiclightbox";
import { refs } from "../js/elements";

refs.list.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);

    instance.show();
  }
});
