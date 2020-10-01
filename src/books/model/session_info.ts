import {
  IsInt,
  IsNumber,
} from 'class-validator';

export class SessionInfo {
  @IsNumber() readonly startDate: number;
  @IsInt() readonly durationSeconds: number; // in seconds
  @IsInt() readonly pagesRead: number;

  constructor(startDate: number, durationSeconds: number, pagesRead: number) {
    this.startDate = startDate;
    this.durationSeconds = durationSeconds;
    this.pagesRead = pagesRead;
  }
}
