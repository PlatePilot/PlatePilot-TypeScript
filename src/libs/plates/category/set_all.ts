import { Category } from './category.ts';

/**
 * This function sets all categories in the list of categories.
 * 
 * @param storage The storage object
 * @param key The storage key
 * @param categories The list of categories to set in the list
 */
export default function setAll(
  storage : Storage,
  key : string,
  categories : Category[]
) : void {
  storage.setItem(key, JSON.stringify(categories))
}
