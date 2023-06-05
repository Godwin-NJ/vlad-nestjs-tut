import { IsEmail, IsOptional, IsString } from 'class-validator';

export class Edituserdto {
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsString()
  @IsOptional()
  firstName?: string;
  @IsString()
  @IsOptional()
  lastName?: string;
}
