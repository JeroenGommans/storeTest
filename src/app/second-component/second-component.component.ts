import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {ItemState} from "../store/state";
import {Observable, tap} from "rxjs";
import {Item} from "../item";

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {
  items$!: Observable<Item[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.items$ = this.store.select(ItemState.items).pipe(
      tap (items => items.push({name: 'in tap from Second Component'})), // Not using an action, but it is still added to the store?
    )
  }
}
