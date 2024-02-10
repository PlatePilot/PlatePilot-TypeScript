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

const addIngredientButton = document.getElementById("add-ingredient-button")

addIngredientButton?.addEventListener("click", () => {
 //create input
 //take input value
 //innerhtml from newItem = input value
 // wie bei tobuy list


  const newItem = document.createElement("span");
  newItem.className = "subcontent-item";
  
  const ingredientSubcontent = document.querySelector("sub-ingredient");
  ingredientSubcontent?.appendChild(newItem);
});


const addDrinkButton = document.getElementById("add-drink-button")

addDrinkButton?.addEventListener("click", () => {



  const newItem = document.createElement("span");
  newItem.className = "subcontent-item";
  
  const drinkSubcontent = document.querySelector("sub-drink");
  drinkSubcontent?.appendChild(newItem);
});



const addEquipmentButton = document.getElementById("add-equipment-button")

addEquipmentButton?.addEventListener("click", () => {



  const newItem = document.createElement("span");
  newItem.className = "subcontent-item";
  
  const equipmentSubcontent = document.querySelector("sub-equipment");
  equipmentSubcontent?.appendChild(newItem);
});
