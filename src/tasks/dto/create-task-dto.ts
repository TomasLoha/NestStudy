//validaciones instalar: npm i --save class-validator class-transformer

import { IsString, MinLength } from 'class-validator';

export class CreateTaskDTO {
	@IsString()
	@MinLength(1)
	title: string;

	@IsString()
	@MinLength(1)
	description: string;
}
