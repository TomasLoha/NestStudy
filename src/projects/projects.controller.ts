import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
	@Get()
	getAllProjects() {}

	@Get()
	getProject() {}

	@Put()
	actualizarProject() {}

	@Post()
	crearProject() {}

	@Delete()
	eliminarProject() {}

	@Patch()
	atualizarEspecificaproject() {}
}
