import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Author} from 'shared-entities';
import {CharlesDickens} from '../db/library-store';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  constructor() {
  }

  public getFavoriteAuthor(): Observable<Author> {
    return of(CharlesDickens);
  }
}
