import { Task } from '@/model/task';
import { Controller, Get } from '@nestjs/common';
import { Ping } from '../model/ping';
import { PingService } from './ping.service';

@Controller('ping')
export class PingController {
    constructor(private readonly pingService: PingService) {}

    @Get('pings')
    async findAll(): Promise<Task[]> {
        const t: Task[] = await this.pingService.getUserPings(1)
        console.log(t)
        return t
    }
}
