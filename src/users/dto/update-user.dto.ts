import { IsString, IsNotEmpty, IsEmail, IsNumber, Max } from 'class-validator';

export class updateUserDto {
	@IsEmail()
	@IsString()
	@IsNotEmpty()
	email?: string;

	@IsString()
	@IsNotEmpty()
	password?: string;

	@IsString()
	@IsNotEmpty()
	name?: string;

	@IsNumber()
	@IsNotEmpty()
	@Max(100)
	age?: number;
}
