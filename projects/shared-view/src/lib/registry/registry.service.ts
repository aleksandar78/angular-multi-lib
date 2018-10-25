import {Injectable} from '@angular/core';
import {AuthorService, BookService} from 'shared-services';
import {Observable} from 'rxjs';
import {Author, Book} from 'shared-entities';

@Injectable({
  providedIn: 'root'
})
export class StoreRegistryService {

  constructor(private book: BookService, private author: AuthorService) {
  }

  getListOfAuthors(): Observable<Author[]> {
    return this.author.getAll();
  }

  getListOfBooks(): Observable<Book[]> {
    return this.book.getAll();
  }
}
