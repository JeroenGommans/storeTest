import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {AddItemAction} from "./store/actions";
import {map, Observable, tap} from "rxjs";
import {Item} from "./item";

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
    this.store.dispatch(new AddItemAction({name: 'Dispatch from App Component'}) );
  }
}
