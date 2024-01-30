import { Category } from './category.ts';
import getAll from './get_all.ts';

/**
 * This function gets a category by its ID from the list of categories. If no category is found, `undefined` gets
 * returned.
 * 
 * @param storage The storage object
 * @param key The storage key
 * @param categories The list of categories to set in the list
 * @returns The category or `undefined`
 */
export default function get(
  storage : Storage,
  key : string,
  categoryId : string
) : Category {
  return getAll(storage, key).filter((category) => category.id === categoryId)[0] || undefined;
}
