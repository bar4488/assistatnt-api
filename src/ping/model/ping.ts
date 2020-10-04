import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class Ping {
  @IsString() name: string;

  @Type(() => Date)
  @IsDate()
  date: Date;
}
