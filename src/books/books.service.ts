import { Task } from '@/model/task';
import {
  CypherStatement,
  PersistenceManager,
  QuerySpecification,
  Transactional,
} from '@liberation-data/drivine';
import {
  InjectCypher,
  InjectPersistenceManager,
} from '@liberation-data/drivine/DrivineInjectionDecorators';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { UserBook as Book } from './model/book';
import { BookInfo, BookInfoOptional } from './model/book_info';

@Injectable()
export class BooksService {
  constructor(
    @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'queries/book/getUserBooks')
    readonly userBooks: CypherStatement,
    @InjectCypher(__dirname, 'queries/book/getHiddenUserBooks')
    readonly userHiddenBooks: CypherStatement,
    @InjectCypher(__dirname, 'queries/book/createBook')
    readonly createBookStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/book/updateBook')
    readonly updateBookStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/book/deleteBook')
    readonly deleteBookStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/book/getBook')
    readonly getBookStmt: CypherStatement,
  ) {}

  @Transactional()
  public async createBook(userId: number, book: BookInfo): Promise<Book> {
    const bookId = book.id ?? uuid.v1();
    const params = {
      userId,
      bookId,
      ...book,
    };
    console.log(params);
    return this.persistenceManager.getOne(
      new QuerySpecification<Book>()
        .withStatement(this.createBookStmt)
        .bind(params)
        .transform(Book),
    );
  }

  @Transactional()
  public async getBook(bookId: string): Promise<Book> {
    const params = {
      bookId,
    };
    console.log(params);
    return this.persistenceManager.getOne(
      new QuerySpecification<Book>()
        .withStatement(this.getBookStmt)
        .bind(params)
        .transform(Book),
    );
  }

  @Transactional()
  public async deleteBook(bookId: string): Promise<void> {
    const params = {
      bookId,
    };
    console.log(params);
    return this.persistenceManager.execute(
      new QuerySpecification().withStatement(this.deleteBookStmt).bind(params),
    );
  }

  @Transactional()
  public async updateBook(bookId: string, book: BookInfoOptional): Promise<Book> {
    const params = {
      bookId,
      book,
    };
    console.log(params);
    return this.persistenceManager.getOne(
      new QuerySpecification<Book>()
        .withStatement(this.updateBookStmt)
        .bind(params)
        .transform(Book),
    );
  }

  @Transactional()
  public async getUserBooks(id: number): Promise<Book[]> {
    return this.persistenceManager.query(
      new QuerySpecification<Book>()
        .withStatement(this.userBooks)
        .bind({ id })
        .transform(Book),
    );
  }

  @Transactional()
  public async getUserHiddenBooks(id: number): Promise<Book[]> {
    return this.persistenceManager.query(
      new QuerySpecification<Book>()
        .withStatement(this.userHiddenBooks)
        .bind({ id })
        .transform(Book),
    );
  }
}
