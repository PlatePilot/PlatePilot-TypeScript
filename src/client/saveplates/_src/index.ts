const changeGridButton = document.getElementById("change-to-grid-button");
const changeListButton = document.getElementById("change-to-list-button");

changeGridButton?.addEventListener("click", () => {
    changeListButton?.classList.remove("selected");
    changeGridButton?.classList.add("selected")

    const itemsWrapper = document.querySelectorAll(".saveplates-wrapper") as NodeListOf<HTMLElement>;
    const items = document.querySelectorAll(".saveplates-item") as NodeListOf<HTMLElement>;
    
    itemsWrapper.forEach((element: HTMLElement) => {
      element.style.flexDirection = "row";
      element.style.flexWrap = "wrap";
    });
    
    items.forEach((element: HTMLElement) => {
      element.style.maxWidth = "225px"
    });
});

changeListButton?.addEventListener("click", () => {
    changeGridButton?.classList.remove("selected");
    changeListButton?.classList.add("selected")

    const itemsWrapper = document.querySelectorAll(".saveplates-wrapper") as NodeListOf<HTMLElement>;
    const items = document.querySelectorAll(".saveplates-item") as NodeListOf<HTMLElement>;
    
    itemsWrapper.forEach((element: HTMLElement) => {
      element.style.flexDirection = "column";
      element.style.flexWrap = "nowrap";
      element.style.width = "100%";
    });
    
    items.forEach((element: HTMLElement) => {
      element.style.width = "100%";
      element.style.maxWidth = "none";
    });
});

const savePlateItems = document.querySelectorAll(".saveplates-item");

savePlateItems.forEach(item => {
  item.addEventListener("click", () => {
    const clickedItemId = item.id;

    const modalItemId = clickedItemId + "-modal";
    const modalElement = document.getElementById(modalItemId);

    if (modalElement) {
      modalElement.style.display = "flex";

      const closeButton = modalElement.querySelector(".close-button");

      if (closeButton) {
        closeButton.addEventListener("click", () => {
          modalElement.style.display = "none";
        });
      }
    }
  });
});