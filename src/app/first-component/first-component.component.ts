import {Component} from '@angular/core';
import {Item} from "../item";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {ItemState} from "../store/state";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {

  @Select(ItemState.items) items$!: Observable<Item[]>;

  constructor(private store: Store) {
  }
}

