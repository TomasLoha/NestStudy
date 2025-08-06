import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
//util para verificar la secion de un usuario
@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest() as Request;
		console.log(request.url);

		if (request.url === '/greet') return false;

		return true;
	}
}
