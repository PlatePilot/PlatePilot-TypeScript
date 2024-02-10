interface Entry {
  name: string;
  checked: boolean;
}

const toBuyList: Entry[] = JSON.parse(localStorage.getItem('toBuyList') ?? '[]');

toBuyList.forEach((entry) => {
  createNewEntry(toBuyList, entry.name, entry.checked);
});

const addContentButton = document.getElementById("add-item-tobuy") as HTMLElement;
addContentButton.addEventListener("click", function(): void {
  createNewEntry(toBuyList);
});

function createSpanFromInput(checkboxTextWrapper: HTMLElement, inputField: HTMLInputElement): void {
  const span = document.createElement("span");
  span.id = "item-span-id";
  span.appendChild(document.createTextNode(inputField.value));

  checkboxTextWrapper.removeChild(inputField);
  checkboxTextWrapper.appendChild(span);
}

function createNewEntry(toBuyList: Entry[], name?: string, checked?: boolean): void {
  const newContent = document.createElement("div");
  newContent.className = "tobuy-item";
  newContent.id = "content-id-" + crypto.randomUUID();

  const checkboxTextWrapper = document.createElement("div");
  checkboxTextWrapper.className = "checkbox-text-wrapper";

  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.className = "checkbox-wrapper";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.checked = checked ?? false;
  checkboxWrapper.appendChild(checkbox);

  const inputField = document.createElement("input");
  inputField.type = "text";

  checkboxTextWrapper.appendChild(checkboxWrapper);
  checkboxTextWrapper.appendChild(inputField);

  if (name) {
    inputField.value = name;
    createSpanFromInput(checkboxTextWrapper, inputField);
  } else {
    inputField.addEventListener("change", () => {
      if (toBuyList.findIndex(entry => entry.name === inputField.value) === -1) {
        createSpanFromInput(checkboxTextWrapper, inputField);

        toBuyList.push({
          name: inputField.value,
          checked: false
        });

        localStorage.setItem('toBuyList', JSON.stringify(toBuyList));
      }
    });
  }

  checkbox.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
  
    toBuyList.forEach((entry) => {
      if (entry.name === inputField.value) {
        entry.checked = target.checked;
      }
    });
  
    localStorage.setItem('toBuyList', JSON.stringify(toBuyList));
  });

  const deleteButton = document.createElement("div");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "<i class='bx bx-x'></i>";

  deleteButton.addEventListener("click", function (): void {
    newContent.parentNode?.removeChild(newContent);
  
    toBuyList.splice(toBuyList.findIndex(entry => entry.name === inputField.value), 1);
  
    localStorage.setItem('toBuyList', JSON.stringify(toBuyList));
  });

  newContent.appendChild(checkboxTextWrapper);
  newContent.appendChild(deleteButton);

  const contentWrapper = document.querySelector(".tobuy-content");
  if (contentWrapper) {
    contentWrapper.appendChild(newContent);
  }

  inputField.focus();
}
