import {NgModule} from '@angular/core';

import {AuthorModule} from 'shared-components';
import {BookModule} from 'shared-components';
import {BookStoreComponent} from './book-store.component';

@NgModule({
  imports: [BookModule, AuthorModule],
  exports: [BookStoreComponent],
  declarations: [BookStoreComponent],
  providers: [],
})
export class BookStoreModule {
}
