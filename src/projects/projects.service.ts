import { Injectable, NotFoundException } from '@nestjs/common';
import { crearProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
	private projects: any[] = [];

	getProjects() {
		return this.projects;
	}

	getOneProject(id: number) {
		const projectFound = this.projects.find(
			(project) => project.id === project,
		);

		if (!projectFound) {
			throw new NotFoundException(`no se encontro un projecto con id: ${id}`);
		}

		return projectFound;
	}

	crearProject(project: crearProjectDto) {
		this.projects.push({
			...project,
			id: this.projects.length + 1,
		});

		return project;
	}
}
