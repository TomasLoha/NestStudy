import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class updateProjectDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(1)
	title?: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(1)
	description?: string;
}
