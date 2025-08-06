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
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task-dto';
import { UpdateTaskDTO } from './dto/update-task-dto';

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
	@Post() //  recordar no usar "TYPE" al importar una clase, ya que no reconoce el DTO primero sn Objs
	@UsePipes(new ValidationPipe()) //Va a validar los @Strings,
	createTasks(@Body() task: CreateTaskDTO) {
		//puedo ejecutar logica antes
		console.log(task instanceof CreateTaskDTO); // <== ¿true o false?
		return this.tasksService.crearTask(task);
	}
	@Put() //actualiza una tarea completamente:
	//  {title: primer tarea, status: false} => {title: primera tarea act, status: true}
	updateTasks(@Body() task: UpdateTaskDTO) {
		//puedo ejecutar logica antes
		return this.tasksService.actualizarTask(task);
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
