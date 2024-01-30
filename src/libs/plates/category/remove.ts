import getAll from './get_all.ts';
import setAll from './set_all.ts';

/**
 * This function removes a category from the list of categories.
 * 
 * @param storage The storage object
 * @param key The storage key
 * @param categoryId The category ID of the category to remove from the list
 */
export default function remove(
  storage : Storage,
  key : string,
  categoryId : string
) : void {
  const categories = getAll(storage, key);

  const categoryIndex = categories.findIndex((categoryEntry) => categoryEntry.id === categoryId);

  if (categoryIndex < 0) {
    categories.splice(categoryIndex, 1);
    setAll(storage, key, categories);
  } else {
    console.log(`Category with ID "${categoryId}" does not exist.`);
  }
}
