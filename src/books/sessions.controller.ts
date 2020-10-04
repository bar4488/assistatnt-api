import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Session } from './model/session';
import { SessionInfo, SessionInfoOptional } from './model/session_info';
import { SessionsService } from './sessions.service';

@Controller('books/:id/sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async getAllBookSessions(
    @Param('id', new ParseUUIDPipe()) bookId: string,
  ): Promise<Session[]> {
    return this.sessionsService.getBookSessions(bookId);
  }

  @Put(':sessionId')
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

  @Patch(':sessionId')
  async updateSessionPart(
    @Param('sessionId', new ParseUUIDPipe()) sessionId: string,
    @Body() session: SessionInfoOptional,
  ): Promise<Session | undefined> {
    const t: Session | undefined = await this.sessionsService.updateSession(
      sessionId,
      session,
    );
    console.log(t);
    return t;
  }

  @Delete(':sessionId')
  async deleteSession(
    @Param('sessionId', new ParseUUIDPipe()) sessionId: string,
  ): Promise<void> {
    await this.sessionsService.deleteSession(sessionId);
  }

  @Get(':sessionId')
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
