const changeGridButton = document.getElementById("change-to-grid-button");
const changeListButton = document.getElementById("change-to-list-button");

changeGridButton?.addEventListener("click", () => {
    changeListButton?.classList.remove("selected");
    changeGridButton?.classList.add("selected")

    const itemsWrapper = document.querySelector(".saveplates-wrapper") as HTMLElement;
    const item = document.querySelector(".saveplates-item") as HTMLElement;

    itemsWrapper.style.flexDirection = "row";
    itemsWrapper.style.flexWrap = "wrap";

    item.style.maxWidth = "225px"
});

changeListButton?.addEventListener("click", () => {
    changeGridButton?.classList.remove("selected");
    changeListButton?.classList.add("selected")

    const itemsWrapper = document.querySelector(".saveplates-wrapper") as HTMLElement;
    const item = document.querySelector(".saveplates-item") as HTMLElement;

    itemsWrapper.style.flexDirection = "column";
    itemsWrapper.style.flexWrap = "nowrap";
    itemsWrapper.style.width = "100%"

    item.style.width = "100%"
    item.style.maxWidth = "none"
});