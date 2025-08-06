import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('/users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get()
	getAllUsers() {
		return this.usersService.getUsers();
	}
	@Get('/:id')
	getUser(@Param('id') id: string) {
		return this.usersService.getUser(parseInt(id));
	}
	@Post()
	@UsePipes(new ValidationPipe())
	createUsers(@Body() user: createUserDto) {
		return this.usersService.createUser(user);
	}
	@Put()
	@UsePipes(new ValidationPipe())
	updateUsers(@Body() user: updateUserDto) {
		return this.usersService.actualizarUser(user);
	}
	@Delete()
	eliminarUsers(@Body() user: createUserDto) {
		return this.usersService.createUser(user);
	}
	@Patch()
	@UsePipes(new ValidationPipe())
	updateUsersPart(@Body() user: updateUserDto) {
		return this.usersService.actualizacionEspecificaUser(user);
	}
}
