import {Component, OnInit} from '@angular/core';
import {Book} from 'shared-entities';
import {BookService} from 'shared-services';
import {Observable} from 'rxjs';

@Component({
  selector: 'sc-favorite-book',
  template: `
    <div>
      <h2>Favorite Book</h2>
      <ul *ngIf="book$ | async as book; else loading">
        <li>Title: {{ book.name }}</li>
        <li>Author: {{ book.author }}</li>
        <li>Publisher: {{ book.publisher }}</li>
        <li>ISBN: {{ book.isbn }}</li>
      </ul>
      <ng-template #loading>Loading book from the store...</ng-template>
    </div>
  `
})

export class FavoriteBookComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private srv: BookService) {
  }

  ngOnInit() {
    this.book$ = this.srv.getFavoriteBook();
  }
}
