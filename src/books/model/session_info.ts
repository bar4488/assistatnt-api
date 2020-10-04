import {
  IsInt,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class SessionInfo {
  @IsInt() readonly startDate: number;
  @IsInt() readonly durationSeconds: number; // in seconds
  @IsInt() readonly pagesRead: number;
}

export class SessionInfoOptional {
  @IsNumber() @IsOptional() readonly startDate?: number;
  @IsInt() @IsOptional() readonly durationSeconds?: number; // in seconds
  @IsInt() @IsOptional() readonly pagesRead?: number;
}
