import { multerOptions } from '@/utils/image_upload';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { FileInterceptor } from '@nestjs/platform-express';
import { BooksService } from './books.service';
import { UserBook as Book } from './model/book';
import { BookCreateInfo, BookInfo, BookInfoOptional } from './model/book_info';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllUserBooks(@Query('hidden') hidden: boolean): Promise<Book[]> {
    if (hidden) {
      return await this.booksService.getUserHiddenBooks(1);
    } else {
      return await this.booksService.getUserBooks(1);
    }
  }

  @Put(':bookId')
  async updateBook(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Body() book: BookCreateInfo,
  ): Promise<Book> {
    const t: Book = await this.booksService.updateBook(bookId, book);
    console.log(t);
    return t;
  }

  @Patch(':bookId')
  async updateBookPart(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Body() book: BookInfoOptional,
  ): Promise<Book> {
    const t: Book = await this.booksService.updateBook(bookId, book);
    console.log(t);
    return t;
  }

  @Get(':bookId')
  async getBook(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
  ): Promise<Book> {
    const t: Book = await this.booksService.getBook(bookId);
    console.log(t);
    return t;
  }

  @Post()
  async createBook(@Body() book: BookCreateInfo): Promise<Book> {
    const t: Book = await this.booksService.createBook(1, book);
    console.log(t);
    return t;
  }

  @Post(':bookId/image')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  async uploadBookImage(
    @Param('bookId') bookId: string,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    // save file name in neo4j
    if(file == null) throw new HttpException("must provide an image", HttpStatus.BAD_REQUEST);
    await this.booksService.updateBook(bookId, { imagePath: file.filename });
    return file.filename;
  }
}
