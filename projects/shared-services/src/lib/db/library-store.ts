import {Author, Book, Novelist} from 'shared-entities';
import {Observable, of} from 'rxjs';

export const OliverTwist: Book = {
  isbn: '12isd01sdqwd',
  name: 'Oliver Twist',
  publisher: 'Sterling',
  author: 'Charles Dickens'
};

export const CharlesDickens: Novelist = {
  name: 'Charles Dickens',
  books: [OliverTwist],
  epoch: 'nineteenth century'
};

export const AUTHORS: Observable<Author[]> = of([CharlesDickens as Author]);
