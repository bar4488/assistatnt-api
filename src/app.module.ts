import { Module } from '@nestjs/common';
import { PlannerModule } from './planner/planner.module';
import { PingModule } from './ping/ping.module';
import {
  DrivineModule,
  DrivineModuleOptions,
} from '@liberation-data/drivine/DrivineModule';
import { DatabaseRegistry } from '@liberation-data/drivine/connection/DatabaseRegistry';
import { TasksModule } from './tasks/tasks.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    DrivineModule.withOptions(<DrivineModuleOptions>{
      connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()],
    }),
    PlannerModule,
    PingModule,
    BooksModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
