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
      tap (items => items.push({name: 'Hoi'})), // Is this pushed to the store?
    )
  }
}
