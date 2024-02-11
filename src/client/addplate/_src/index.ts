// open close plate description
const addPlateDescription = document.getElementById("addplatedescription");
const closePlateDescription = document.getElementById("closeplatedescription");

const plateDescription = document.querySelector('.plate-description') as HTMLElement;
const connector = document.querySelector('.connector') as HTMLElement;
const addPlateButton = document.querySelector('.addplate-button') as HTMLElement;

addPlateDescription?.addEventListener('click', () => {
    plateDescription.style.display ='block';
    connector.style.display ='flex';
    addPlateButton.style.display ='none';
});

closePlateDescription?.addEventListener('click', () => {
    plateDescription.style.display ='none';
    connector.style.display ='none';
    addPlateButton.style.display ='flex';
});


// amount dropdown
const dropdownAmountButton = document.getElementById("dropdown-amount-button")!;
const amountDropdown = document.getElementById("amount-dropdown-menu")!;

dropdownAmountButton?.addEventListener('click', () => {

  if (amountDropdown) {
    if (amountDropdown.style.display === 'none' || amountDropdown.style.display === '') {
      amountDropdown.style.display = 'block';
    } else {
      amountDropdown.style.display = 'none';
    }
  }
});

const dropdownItems = amountDropdown?.getElementsByClassName("dropdown-item");

let selectedItemText: string | null = null;

if (dropdownItems) {
  for (const item of dropdownItems) {
    item.addEventListener("click", () => {
      selectedItemText = item.textContent || "";
      const newSpan = document.createElement("span");
      newSpan.textContent = selectedItemText;
      newSpan.classList.add('dropdown-text');

      dropdownAmountButton.innerHTML = '';
      dropdownAmountButton.appendChild(newSpan);
      amountDropdown.style.display = 'none';
    });
  }
}
dropdownAmountButton?.addEventListener('click', () => {
  if (amountDropdown) {
    amountDropdown.style.display = (amountDropdown.style.display === 'none' 
    || amountDropdown.style.display === '') ? 'block' : 'none';
  }
});

dropdownAmountButton?.addEventListener('click', () => {
  if (amountDropdown) {
    amountDropdown.style.display = 'block';
  }
});


// create subcontent-item

function createInputField(): HTMLInputElement {
  const inputField = document.createElement("input");
  inputField.classList.add("subcontent-input");

  inputField.addEventListener("blur", () => {
      if (!inputField.value.trim()) {
          destroyInputField(inputField);
      }
  });

  inputField.addEventListener("change", () => {
      if (inputField.value.trim()) {
          createSpan(inputField.value.trim(), inputField.parentElement);
          destroyInputField(inputField);
      }
  });

  return inputField;
}

function createSpan(text: string, subcontent: HTMLElement | null): void {
  if (!subcontent) {
    return;
  }

  const span = document.createElement("span");
  span.classList.add("subcontent-item");
  span.textContent = text;

  span.addEventListener("click", () => {
      const editInput = createInputField();
      editInput.value = text;

      editInput.addEventListener("blur", () => {
        replaceElement(editInput, span);
      });
      editInput.addEventListener("change", () => {
          if (editInput.value.trim()) {
              span.textContent = editInput.value.trim();
          }
      });

      replaceElement(span, editInput);
      editInput.focus();
  });

  subcontent.appendChild(span);
}

function destroyInputField(inputField: HTMLInputElement): void {
  inputField.removeEventListener("blur", () => {});
  inputField.removeEventListener("change", () => {});
  inputField.remove();
}

function replaceElement(oldElement: HTMLElement, newElement: HTMLElement): void {
  oldElement.parentNode?.replaceChild(newElement, oldElement);
}

function initializeAddButton(
  addButton: HTMLDivElement | null,
  subcontent: HTMLElement
): void {
  addButton?.addEventListener("click", () => {
    const inputField = createInputField();
    subcontent?.appendChild(inputField);
    inputField.focus();
  });
}

// ingredient
const addIngredientButton = document.getElementById("add-ingredient-button") as HTMLDivElement;
const ingredientSubcontent = document.querySelector(".sub-ingredient") as HTMLElement;
initializeAddButton(addIngredientButton, ingredientSubcontent);

// drink
const addDrinkButton = document.getElementById("add-drink-button") as HTMLDivElement;
const drinkSubcontent = document.querySelector(".sub-drink") as HTMLElement;
initializeAddButton(addDrinkButton, drinkSubcontent);

// equipment
const addEquipmentButton = document.getElementById("add-equipment-button") as HTMLDivElement;
const equipmentSubcontent = document.querySelector(".sub-equipment") as HTMLElement;
initializeAddButton(addEquipmentButton, equipmentSubcontent);
