import { Task } from '@/model/task';
import { Controller, Get, } from '@nestjs/common';
import { PlannerService } from './planner.service';

@Controller('planner')
export class PlannerController {
    constructor(private readonly plannerService: PlannerService) {}

    @Get('tasks')
    async findAll(): Promise<Task[]> {
        return this.plannerService.findAll();
    }
}
