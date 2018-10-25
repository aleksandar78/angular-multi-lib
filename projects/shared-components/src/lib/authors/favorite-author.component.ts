import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from 'shared-entities';
import {AuthorService} from 'shared-services';

@Component({
  selector: 'sc-favorite-author',
  template: `
    <div>
      <h2>Favorite Author</h2>
      <div *ngIf="author$ | async as author; else loading">
        <h3>Name: {{ author.name }}</h3>
        <h6>Best books:</h6>
        <ul>
          <li *ngFor="let book of author.books">{{ book.name }}</li>
        </ul>
      </div>
      <ng-template #loading>Loading author from the store...</ng-template>
    </div>
  `
})

export class FavoriteAuthorComponent implements OnInit {

  author$: Observable<Author>;

  constructor(private srv: AuthorService) {
  }

  ngOnInit() {
    this.author$ = this.srv.getFavoriteAuthor();
  }
}
