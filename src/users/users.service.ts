import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	private users = [
		{ id: 1, name: 'Jame Dohe', phone: '334433212' },
		{ id: 2, name: 'Luis Ortiz', phone: '43243242' },
	];

	getUsers() {
		return this.users;
	}
}
