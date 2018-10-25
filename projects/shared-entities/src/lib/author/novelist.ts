import {Author} from './author';
import {Book} from '../book';

export class Novelist implements Author {
  name: string;
  books: Book[];
  epoch: string;
}
