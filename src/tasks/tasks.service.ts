import { Injectable, HttpException, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';

export interface User {
	name: string;
	age: number;
}

@Injectable()
export class TasksService {
	//recordar que el controlador no conoce el interface y se debe expoprtar
	private tasks: any[] = [];

	getTasks() {
		return this.tasks;
	}
	getTask(id: number) {
		const taskFound = this.tasks.find((task) => task.id === id); //cuidado con las igualdades
		if (!taskFound) {
			return new NotFoundException(`task con id ${id} no fue encontrado`);
		}
		return taskFound;
	}
	//puedo editar/agregar parametros de llegada con esta config ...task
	crearTask(task: CreateTaskDTO) {
		console.log(task);
		this.tasks.push({
			...task,
			id: this.tasks.length + 1,
		});
		return task;
	}

	actualizarTask(task: UpdateTaskDTO) {
		console.log(task.description);
		return;
	}
	eliminarTask() {
		return 'Eliminar Task';
	}
	updateStatusTask() {
		return 'actualizar status Task';
	}
}
