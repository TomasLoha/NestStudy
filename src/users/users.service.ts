import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	private users: any[] = [];

	getUsers() {
		return this.users;
	}
	getUser(id: number) {
		const userFound = this.users.find((user) => user.id === id);
		if (!userFound) {
			throw new NotFoundException(`no se encontro el usuario con id: ${id}`);
		}
		return this.users;
	}

	createUser(user: createUserDto) {
		this.users.push(user);

		return {
			...user,
			id: this.users.length + 1,
		};
	}

	actualizarUser(user: updateUserDto) {
		return {};
	}

	eliminarUser(id: number) {
		return {};
	}

	actualizacionEspecificaUser(user: updateUserDto) {
		return {};
	}
}
