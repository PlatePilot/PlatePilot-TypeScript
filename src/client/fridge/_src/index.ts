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
            const offset = containerRect.top + window.scrollY - wrapper.getBoundingClientRect().top - (wrapper.clientHeight - containerRect.height) / 2;
  
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
  