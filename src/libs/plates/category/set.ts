import { Category } from './category.ts';
import getAll from './get_all.ts';
import setAll from './set_all.ts';

/**
 * This function sets a category in the list of categories.
 * 
 * @param storage The storage object
 * @param key The storage key
 * @param category The category object to set in the list
 */
export default function set(
  storage : Storage,
  key : string,
  category : Category
) : void {
  const categories = getAll(storage, key);

  const categoryIndex = categories.findIndex((categoryEntry) => categoryEntry.id === category.id);

  if (categoryIndex) {
    categories[categoryIndex] = category;
    setAll(storage, key, categories);
  } else {
    console.log(`Category with ID "${category.id}" does not exist.`);
  }
}
