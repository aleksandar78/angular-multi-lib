import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {OliverTwist} from '../db/library-store';
import {Book} from 'shared-entities';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor() {
  }

  public getFavoriteBook(): Observable<Book> {
    return of(OliverTwist);
  }

}
