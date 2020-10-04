import { Task } from '@/model/task';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Ping } from './model/ping';
import { PingService } from './ping.service';

@Controller('pings')
export class PingController {
    constructor(private readonly pingService: PingService) {}

    @Get()
    async findAll(): Promise<Ping[]> {
        const t: Ping[] = await this.pingService.getUserPings(1)
        console.log(t)
        return t
    }
    
    @Post()
    async createPing(@Body() ping: Ping): Promise<Ping> {
        const t: Ping = await this.pingService.createPing(1, ping);
        console.log(t)
        return t
    }

    @Delete(":id")
    async deletePing(@Param("id") pingId: string): Promise<Ping> {
        const t: Ping = await this.pingService.deletePing(pingId);
        console.log(t)
        return t
    }

    @Put(":id")
    async updatePing(@Param("id") pingId: string, @Body() ping: Ping): Promise<Ping> {
        const t: Ping = await this.pingService.updatePing(ping);
        console.log(t)
        return t
    }
}
