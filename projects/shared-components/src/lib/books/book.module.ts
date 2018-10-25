import {NgModule} from '@angular/core';

import {FavoriteBookComponent} from './favorite-book.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [FavoriteBookComponent],
  declarations: [FavoriteBookComponent],
  providers: [],
})
export class BookModule {
}
