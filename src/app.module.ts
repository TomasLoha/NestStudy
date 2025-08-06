import { Module, ValidationPipe } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { APP_PIPE } from '@nestjs/core';
@Module({
	imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, HelloModule],
	providers: [
		{
			provide: APP_PIPE,
			useClass: ValidationPipe,
		},
	], //preguntar por la diferencia con el globalPipes
})
export class AppModule {}
