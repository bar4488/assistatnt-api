import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class Task {
  @IsNumber() @IsOptional() readonly id?: number;
  @IsString() readonly name: string;
  @IsBoolean() readonly done: boolean;

  constructor(id: number | undefined, name: string, done: boolean) {
    this.id = id;
    this.name = name;
    this.done = done;
  }
}
