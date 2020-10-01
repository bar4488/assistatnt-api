import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UserBook {
  @IsUUID() @IsOptional() readonly id?: string;
  @IsString() readonly name: string;
  @IsString() readonly writer: string;
  @IsString() readonly imagePath: string;
  @IsInt() readonly pageCount: number;
  @IsInt() readonly currentPage: number;

  constructor(
    id: string | undefined,
    name: string,
    writer: string,
    imagePath: string,
    pageCount: number,
    currentPage: number,
  ) {
    this.id = id;
    this.name = name;
    this.writer = writer;
    this.imagePath = imagePath;
    this.pageCount = pageCount;
    this.currentPage = currentPage;
  }
}
