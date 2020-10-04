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
import { Ping } from './model/ping';

@Injectable()
export class PingService {
  constructor(
    @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'queries/allUserPings')
    readonly userPings: CypherStatement,
    @InjectCypher(__dirname, 'queries/createPing')
    readonly createPingStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/deletePing')
    readonly deletePingStmt: CypherStatement,
    @InjectCypher(__dirname, 'queries/updatePing')
    readonly updatePingStmt: CypherStatement,
  ) {}

  @Transactional()
  public async getUserPings(userId: number): Promise<Ping[]> {
    return this.persistenceManager.query(
      new QuerySpecification<Ping>()
        .withStatement(this.userPings)
        .bind({ userId })
        .transform(Ping),
    );
  }

  @Transactional()
  public async createPing(userId: number, ping: Ping): Promise<Ping> {
    const params = {
      userId: userId,
      name: ping.name,
      date: ping.date.toISOString(),
    };
    return this.persistenceManager.getOne(
      new QuerySpecification<Ping>()
        .withStatement(this.createPingStmt)
        .bind(params)
        .transform(Ping),
    );
  }

  @Transactional()
  public async deletePing(pingId: string): Promise<Ping> {
    const params = {
      pingId,
    };
    return this.persistenceManager.getOne(
      new QuerySpecification<Ping>()
        .withStatement(this.deletePingStmt)
        .bind(params)
        .transform(Ping),
    );
  }
  @Transactional()
  public async updatePing(ping: Ping): Promise<Ping> {
    const params = ping;
    return this.persistenceManager.getOne(
      new QuerySpecification<Ping>()
        .withStatement(this.updatePingStmt)
        .bind(params)
        .transform(Ping),
    );
  }
}
