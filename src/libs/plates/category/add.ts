import { Category } from './category.ts';
import getAll from './get_all.ts';
import setAll from './set_all.ts';

/**
 * This function adds a category to the list of categories.
 * 
 * @param storage The storage object
 * @param key The storage key
 * @param category The category to add to the list
 */
export default function add(
  storage : Storage,
  key : string,
  category : Category
) : void {
  const categories = getAll(storage, key);

  const categoryIndex = categories.findIndex((categoryEntry) => categoryEntry.id === category.id);

  if (categoryIndex < 0) {
    categories.push(category);
    setAll(storage, key, categories);
  } else {
    console.log(`Category with ID "${category.id}" does already exist.`);
  }
}
