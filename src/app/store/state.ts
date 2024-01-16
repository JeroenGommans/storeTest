import {Item} from "../item";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AddItemAction} from "./actions";

export interface StateModel {
  items: Item[];
}

@State<StateModel>({
  name: 'items',
  defaults: {
    items: [],
  },
})

@Injectable()
export class ItemState {
  constructor() {
  }

  @Action(AddItemAction)
  addItem(ctx: StateContext<StateModel>, action: AddItemAction) {
    ctx.setState({items: [...ctx.getState().items, action.item]});
  }

  @Selector()
  static items(state: StateModel) {
    return state.items;
  }
}


