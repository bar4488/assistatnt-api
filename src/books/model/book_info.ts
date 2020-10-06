import {
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class BookCreateInfo {
  @IsOptional() @IsUUID() readonly id?: string;
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
  @IsOptional() @IsUUID() id?: string;
  @IsString() readonly name: string;
  @IsString() readonly writer: string;
  @IsInt() readonly pageCount: number;
  @IsString() readonly imagePath?: string;
}
