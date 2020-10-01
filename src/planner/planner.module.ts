import { Module } from '@nestjs/common';
import { PlannerService } from './planner.service';
import { PlannerController } from './planner.controller';

@Module({
  providers: [PlannerService],
  controllers: [PlannerController]
})
export class PlannerModule {}
