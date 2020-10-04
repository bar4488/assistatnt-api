import {
  IsInt,
  IsString,
  IsUUID,
} from 'class-validator';

export class UserBook {
  @IsUUID() readonly id: string;
  @IsString() readonly name: string;
  @IsString() readonly writer: string;
  @IsString() readonly imagePath: string;
  @IsInt() readonly pageCount: number;
  @IsInt() readonly currentPage: number;
}
