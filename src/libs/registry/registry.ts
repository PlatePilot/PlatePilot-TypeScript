import { Category } from './category/category.ts';

export default class Registry {
  private _storage : Storage
  private _key: string;
  constructor(
    storage : Storage,
    key : string
  ) {
    this._storage = storage
    this._key = key
  }

  private _readStorage() : Category[] {
    return JSON.parse(this._storage.getItem(this._key) ?? '[]') as Category[]
  }

  private _writeStorage(categories : Category[]) : void {
    return this._storage.setItem(this._key, JSON.stringify(categories))
  }

  public get storage() : Storage {
    return this._storage;
  }

  public get key() : string {
    return this._key;
  }

  public getAllCategories() : Category[] {
    return this._readStorage();
  }

  public setAllCategories(categories : Category[]) : void {
    this._writeStorage(categories);
  }

  public getCategoryById(categoryId : string) : Category | undefined {
    return this._readStorage().filter((categoryEntry) => categoryEntry.id === categoryId)[0]
  }

  public setCategoryById(
    categoryId : string,
    category : Category
  ) : void {
    const categories = this._readStorage();
    categories.filter((categoryEntry) => categoryEntry.id === categoryId)[0] = category;

    this._writeStorage(categories);
  }
}
