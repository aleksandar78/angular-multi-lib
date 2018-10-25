import {NgModule} from '@angular/core';

import {FavoriteAuthorComponent} from './favorite-author.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [FavoriteAuthorComponent],
  declarations: [FavoriteAuthorComponent],
  providers: [],
})
export class AuthorModule {
}
