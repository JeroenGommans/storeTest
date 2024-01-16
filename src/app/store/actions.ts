import {Item} from "../item";

export class AddItemAction {
  static readonly type = '[Invoices] Add item';
  constructor(public item: Item) {}
}
