import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sv-book-store-component',
  template: `
    <div>
      <h1>Book Store</h1>
      <hr>
      <sc-favorite-book></sc-favorite-book>
      <hr>
      <sc-favorite-author></sc-favorite-author>
    </div>
  `
})

export class BookStoreComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
