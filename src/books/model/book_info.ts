import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class BookInfo {
  @IsString() readonly name: string;
  @IsString() readonly writer: string;
  @IsString() readonly imagePath: string;
  @IsInt() readonly pageCount: number;

  constructor(name: string, writer: string, imagePath: string, pageCount: number) {
    this.name = name;
    this.writer = writer;
    this.imagePath = imagePath;
    this.pageCount = pageCount;
  }
}
