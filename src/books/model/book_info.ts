import {
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class BookCreateInfo {
  @IsString() readonly name: string;
  @IsString() readonly writer: string;
  @IsInt() readonly pageCount: number;
}

export class BookInfoOptional {
  @IsString() @IsOptional() readonly name?: string;
  @IsString() @IsOptional() readonly writer?: string;
  @IsInt() @IsOptional() readonly pageCount?: number;
  @IsString() @IsOptional() readonly imagePath?: string;
}

export class BookInfo {
  @IsString() readonly name: string;
  @IsString() readonly writer: string;
  @IsInt() readonly pageCount: number;
  @IsString() readonly imagePath?: string;
}
