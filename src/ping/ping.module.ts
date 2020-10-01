import { Module } from '@nestjs/common';
import { PingService } from './ping.service';
import { PingController } from './ping.controller';

@Module({
  imports: [],
  providers: [PingService],
  controllers: [PingController],
  exports: []
})
export class PingModule {}
