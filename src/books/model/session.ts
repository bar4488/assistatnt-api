import {
  IsDate,
  IsInt,
  IsUUID,
} from 'class-validator';

export class Session {
  @IsUUID() readonly id: string;
  @IsDate() readonly startDate: number;
  @IsInt() readonly durationSeconds: number; // in seconds
  @IsInt() readonly pagesRead: number;

  constructor(id: string, startDate: number, durationSeconds: number, pagesRead: number) {
    this.id = id;
    this.startDate = startDate;
    this.durationSeconds = durationSeconds;
    this.pagesRead = pagesRead;
  }
}
