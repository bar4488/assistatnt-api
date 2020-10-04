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
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    DrivineModule.withOptions(<DrivineModuleOptions>{
      connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()],
    }),
    MulterModule.register({
      dest: './files',
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
