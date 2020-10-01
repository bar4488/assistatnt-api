import { Task } from '@/model/task';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlannerService {
    tasks: Task[] = [
        {
            id: 1,
            name: "to do",
            done: false,
        }
    ]
    findAll(): Task[] {
        return this.tasks;
    }
}
