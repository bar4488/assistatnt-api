import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

@Module({
  imports: [],
  providers: [BooksService, SessionsService],
  controllers: [BooksController, SessionsController],
  exports: []
})
export class BooksModule {}
