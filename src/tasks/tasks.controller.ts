import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
	tasksService: TasksService;
	constructor(tasksService: TasksService) {
		this.tasksService = tasksService; //no olvidar esto
	}
	//puedo obtener filtros a traves de la informacion de query
	@Get()
	getAllTasks(@Query() query: any) {
		//puedo ejecutar logica antes
		console.log(query);
		return this.tasksService.getTasks();
	}
	//cuando el valor puede variar usamos ":nombre" para definir la variable del path
	@Get('/:id')
	getTask(@Param('id') id: string) {
		return this.tasksService.getTask(parseInt(id));
	}
	//puedo obtener el cuerpo del jso na traves de body
	@Post()
	createTasks(@Body() task: any) {
		//puedo ejecutar logica antes
		return this.tasksService.crearTask(task);
	}
	@Put() //actualiza una tarea completamente:
	//  {title: primer tarea, status: false} => {title: primera tarea act, status: true}
	updateTasks() {
		//puedo ejecutar logica antes
		return this.tasksService.actualizarTask();
	}
	@Delete()
	deleteTasks() {
		//puedo ejecutar logica antes
		return this.tasksService.eliminarTask();
	}
	@Patch() //actualzia solo una procion:
	//   {title: primer tarea, status: false} => {status: true}
	updateTasksStatus() {
		//puedo ejecutar logica antes
		return this.tasksService.updateStatusTask();
	}
}
