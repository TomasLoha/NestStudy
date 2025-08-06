import { IsString, MinLength } from 'class-validator';

export class UpdateTaskDTO {
	@IsString()
	@MinLength(1)
	title?: string; // "?" define que es opcional

	@IsString()
	@MinLength(1)
	description?: string;
}
