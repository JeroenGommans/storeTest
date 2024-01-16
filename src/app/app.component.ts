import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {AddItemAction} from "./store/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storeTest';

  constructor(private store: Store) {
  }

  addItem() {
    this.store.dispatch(new AddItemAction({name: 'Hallo'}) );
  }
}
