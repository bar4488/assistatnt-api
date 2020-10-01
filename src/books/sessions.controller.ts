import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Session } from './model/session';
import { SessionInfo } from './model/session_info';
import { SessionsService } from './sessions.service';

@Controller('books/id/:id/sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async getAllBookSessions(
    @Param('id', new ParseUUIDPipe()) bookId: string,
  ): Promise<Session[]> {
    return this.sessionsService.getBookSessions(bookId);
  }

  @Patch('id/:sessionId')
  async updateSession(
    @Param('sessionId', new ParseUUIDPipe()) sessionId: string,
    @Body() session: SessionInfo,
  ): Promise<Session | undefined> {
    const t: Session | undefined = await this.sessionsService.updateSession(
      sessionId,
      session,
    );
    console.log(t);
    return t;
  }

  @Delete('id/:sessionId')
  async deleteSession(
    @Param('sessionId', new ParseUUIDPipe()) sessionId: string,
  ): Promise<void> {
    await this.sessionsService.deleteSession(sessionId);
  }

  @Get('id/:sessionId')
  async getSession(
    @Param('sessionId', new ParseUUIDPipe()) sessionId: string,
  ): Promise<Session | undefined> {
    const t: Session | undefined = await this.sessionsService.getSession(
      sessionId,
    );
    console.log(t);
    return t;
  }

  @Post()
  async createSession(
    @Param('id', new ParseUUIDPipe()) bookId: string,
    @Body() session: SessionInfo,
  ): Promise<Session | undefined> {
    const t: Session | undefined = await this.sessionsService.createSession(
      bookId,
      session,
    );
    console.log(t);
    return t;
  }
}
