import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from 'shared-entities';
import {StoreRegistryService} from '../registry/registry.service';

@Component({
  selector: 'sv-authors',
  template: `
    <div>
      <h3>List of available authors</h3>
      <ul>
        <li *ngFor="let author of authors$ | async">{{ author.name }}</li>
      </ul>
    </div>
  `
})

export class AuthorsComponent implements OnInit {

  authors$: Observable<Author[]>;

  constructor(private store: StoreRegistryService) {
  }

  ngOnInit() {
    this.authors$ = this.store.getListOfAuthors();
  }
}
