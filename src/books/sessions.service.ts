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
import { Session } from './model/session';
import { SessionInfo } from './model/session_info';

@Injectable()
export class SessionsService {
  constructor(
    @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'queries/session/getBookSessions')
    readonly bookSessions: CypherStatement,
    @InjectCypher(__dirname, 'queries/session/createSession')
    readonly createSessionStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/session/updateSession')
    readonly updateSessionStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/session/deleteSession')
    readonly deleteSessionStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/session/getSession')
    readonly getSessionStmt: CypherStatement,
  ) {}

  @Transactional()
  public async createSession(
    bookId: string,
    session: SessionInfo,
  ): Promise<Session | undefined> {
    const params = {
      bookId,
      ...session,
    };
    console.log(params);
    return this.persistenceManager.maybeGetOne(
      new QuerySpecification<Session>()
        .withStatement(this.createSessionStmt)
        .bind(params)
        .transform(Session));
  }

  @Transactional()
  public async deleteSession(
    sessionId: string,
  ): Promise<void> {
    const params = {
      sessionId,
    };
    console.log(params);
    return this.persistenceManager.execute(
      new QuerySpecification()
        .withStatement(this.deleteSessionStmt)
        .bind(params)
        .transform(Session),
    );
  }
  @Transactional()
  public async updateSession(
    sessionId: string,
    session: SessionInfo,
  ): Promise<Session | undefined> {
    const params = {
      sessionId,
      session,
    };
    console.log(params);
    return this.persistenceManager.maybeGetOne(
      new QuerySpecification<Session>()
        .withStatement(this.updateSessionStmt)
        .bind(params)
        .transform(Session),
    );
  }

  @Transactional()
  public async getSession(sessionId: string): Promise<Session | undefined> {
    const params = {
      sessionId,
    };
    console.log(params);
    return this.persistenceManager.maybeGetOne(
      new QuerySpecification<Session>()
        .withStatement(this.getSessionStmt)
        .bind(params)
        .transform(Session),
    );
  }

  @Transactional()
  public async getBookSessions(bookId: string): Promise<Session[]> {
    return this.persistenceManager.query(
      new QuerySpecification<Session>()
        .withStatement(this.bookSessions)
        .bind({ bookId })
        .transform(Session),
    );
  }
}
