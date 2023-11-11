export class Statistic<S extends {}> {
  #items: Partial<S> = {};

  get items(): Partial<S> {
    return this.#items;
  }

  constructor(initItems: Partial<S> = {}) {
    Object.assign(this.#items, initItems);
  }

  add<Key extends keyof S, Value extends S[Key]>(
    name: Key,
    item: Value extends Function
      ? never
      : Value | ((lastItem: Value | undefined) => Value)
  ): void {
    if (typeof item === 'function') {
      this.#items = {
        ...this.#items,
        [name]: item(this.#items[name] as Value),
      };
      return;
    }
    this.#items = {
      ...this.#items,
      [name]: item,
    };
  }
}
