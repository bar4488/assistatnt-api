import { Task } from '@/model/task';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { UserBook as Book } from './model/book copy';
import { BookInfo } from './model/book_info';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllUserBooks(): Promise<Book[]> {
    const t: Book[] = await this.booksService.getUserBooks(1);
    console.log(t);
    return t;
  }

  @Get('hidden')
  async getUserHiddenBooks(): Promise<Book[]> {
    const t: Book[] = await this.booksService.getUserHiddenBooks(1);
    console.log(t);
    return t;
  }

  @Patch('id/:bookId')
  async updateBook(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Body() book: BookInfo,
  ): Promise<Book> {
    const t: Book = await this.booksService.updateBook(bookId, book);
    console.log(t);
    return t;
  }

  @Get('id/:bookId')
  async getBook(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
  ): Promise<Book> {
    const t: Book = await this.booksService.getBook(bookId);
    console.log(t);
    return t;
  }

  @Post()
  async createBook(@Body() book: BookInfo): Promise<Book> {
    const t: Book = await this.booksService.createBook(1, book);
    console.log(t);
    return t;
  }
}
