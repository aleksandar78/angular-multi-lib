import {NgModule} from '@angular/core';

import {AuthorsComponent} from './authors.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [AuthorsComponent],
  declarations: [AuthorsComponent],
  providers: [],
})
export class AuthorsModule {
}
