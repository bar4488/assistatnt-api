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
import { Ping } from '../model/ping';

@Injectable()
export class PingService {
  constructor(
    @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
    @InjectCypher(__dirname, 'queries/allUserTasks')
    readonly userTasks: CypherStatement,
  ) {}

  @Transactional()
  public async getUserPings(id: number): Promise<Task[]> {
    return this.persistenceManager.query(
      new QuerySpecification<Task>()
        .withStatement(this.userTasks)
        .bind([id]).transform(Task)
    );
  }
}
