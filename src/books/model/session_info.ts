import {
  IsInt,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class SessionInfo {
  @IsOptional() @IsUUID() readonly id?: string; 
  @IsInt() readonly startDate: number;
  @IsInt() readonly durationSeconds: number; // in seconds
  @IsInt() readonly pagesRead: number;
}

export class SessionInfoOptional {
  @IsNumber() @IsOptional() readonly startDate?: number;
  @IsInt() @IsOptional() readonly durationSeconds?: number; // in seconds
  @IsInt() @IsOptional() readonly pagesRead?: number;
}
