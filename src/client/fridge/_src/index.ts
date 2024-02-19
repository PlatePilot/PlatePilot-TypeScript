document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.fridge-content-wrapper');

  if (wrapper) {
    const categories = document.querySelectorAll('.category');
    let selectedCategory: string | null = null;

    const updateSelectedCategory = () => {
      categories.forEach(category => {
        const categoryData = category.getAttribute('data-category');
        const container = document.querySelector(`.fridge-content-container[data-category="${categoryData}"]`);
        const icon = category.querySelector('.category-icon');

        if (container) {
          const containerRect = container.getBoundingClientRect();

          if (containerRect.top <= wrapper.clientHeight / 2 && containerRect.bottom >= wrapper.clientHeight / 2) {
            if (selectedCategory !== categoryData) {
              categories.forEach(cat => cat.classList.remove('selected'));
              categories.forEach(cat => cat.querySelector('.category-icon')?.classList.remove('selected-icon'));
              category.classList.add('selected');
              icon?.classList.add('selected-icon');
              selectedCategory = categoryData;
            }
          }
        }
      });
    };

    const clickAllItems = () => {
      const allItemsCategory = document.querySelector('.category[data-category="all"]');
      if (allItemsCategory) {
        const clickEvent = new Event('click', { bubbles: true });
        allItemsCategory.dispatchEvent(clickEvent);
      }
    };

    wrapper.addEventListener('scroll', () => {
      updateSelectedCategory();
    });

    categories.forEach(category => {
      category.addEventListener('click', () => {
        categories.forEach(cat => cat.classList.remove('selected'));
        categories.forEach(cat => cat.querySelector('.category-icon')?.classList.remove('selected-icon'));
        category.classList.add('selected');
        category.querySelector('.category-icon')?.classList.add('selected-icon');
        selectedCategory = category.getAttribute('data-category');

        const container = document.querySelector(`.fridge-content-container[data-category="${selectedCategory}"]`);
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const offset = containerRect.top + globalThis.scrollY - wrapper.getBoundingClientRect().top - (wrapper.clientHeight - containerRect.height) / 2;

          wrapper.scrollTo({
            top: offset + wrapper.scrollTop,
            behavior: 'smooth'
          });
        }
      });
    });
    clickAllItems();
  }
});


// open close modal

const addModalItemButton = document.getElementById("addmodalitembutton");

addModalItemButton?.addEventListener('click', () => {
  const fridgeModalScreen = document.querySelector('.fridge-modal') as HTMLElement;
  fridgeModalScreen.style.display ='flex';
});

const saveModalItemButton = document.getElementById("savebuttonmodal");

saveModalItemButton?.addEventListener('click', () => {
  const fridgeModalScreen = document.querySelector('.fridge-modal') as HTMLElement;
  fridgeModalScreen.style.display ='none';
});


// modal amount

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



// modal category

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isSelected = card.classList.contains("selected");

    categoryCards.forEach((c) => {
      c.classList.remove("selected");
    });

    if (!isSelected) {
      card.classList.add("selected");
    }
  });
});









const saveButtonModal = document.getElementById("savebuttonmodal")!;
const nameInput = document.getElementById("name-fridge-modal") as HTMLInputElement;
const amountInput = document.getElementById("amount-fridge-modal") as HTMLInputElement;
const modalExpirationInput = document.getElementById("modal-expiration") as HTMLInputElement;

saveButtonModal.addEventListener('click', () => {
  const nameValue = nameInput.value.trim();

  if (nameValue !== "") {
    const amountValue = amountInput.value.trim();
    const expirationValue = modalExpirationInput.value;

    const displaySelectedItemText = (selectedItemText && selectedItemText !== "items") ? selectedItemText : "";

    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("fridge-item")

    if (amountValue !== "") {
      const newAmountSpan = document.createElement("span");
      newAmountSpan.innerHTML = amountValue;
      newItemDiv.appendChild(newAmountSpan);
    }

    if (displaySelectedItemText !== "") {
      const newItemText = document.createElement("span");
      newItemText.innerHTML = displaySelectedItemText;
      newItemDiv.appendChild(newItemText);
    }

    const newNameSpan = document.createElement("span");
    newNameSpan.innerHTML = nameValue;

    newItemDiv.appendChild(newNameSpan);

    if (expirationValue !== "") {
      const newExpirationText = document.createElement("span");
      newExpirationText.classList.add("expiration-wrapper");
      newExpirationText.innerHTML = "<i class='bx bx-info-circle'></i>";
      newItemDiv.appendChild(newExpirationText);

      newExpirationText.setAttribute("data-expiration", expirationValue);
    }

    const deleteDiv = document.createElement("div");
    deleteDiv.innerHTML = "<i class='bx bx-x'></i>";
    newItemDiv.appendChild(deleteDiv);
    deleteDiv.className = "fridge-item-delete";

    const selectedCategoryCard = document.querySelector(".category-card.selected");

    if (selectedCategoryCard) {
      const selectedCategory = selectedCategoryCard.getAttribute("data-category");

      const categoryContainer = document.querySelector(`.fridge-content-container[data-category='${selectedCategory}']`);

      if (categoryContainer) {
        const categoryContent = categoryContainer.querySelector(".fridge-content");

        if (categoryContent) {
          const newItemDivClone = newItemDiv.cloneNode(true);
          categoryContent.appendChild(newItemDivClone);
        }
      }
    }

    const allCategoryContainer = document.querySelector(".fridge-content-container[data-category='all']");

    if (allCategoryContainer) {
      const allCategoryContent = allCategoryContainer.querySelector(".fridge-content");

      if (allCategoryContent) {
        allCategoryContent.appendChild(newItemDiv);
      }
    }
  }

  nameInput.value = "";
  amountInput.value = "";
  modalExpirationInput.value = "";
});


