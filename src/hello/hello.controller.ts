import {
	Controller,
	Get,
	HttpCode,
	Param,
	ParseBoolPipe,
	ParseIntPipe,
	Query,
	Req,
	Res,
	UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
	@Get('/hello')
	index(@Req() request: Request, @Res() response: Response) {
		console.log(request.url);
		response.status(200).json({
			message: 'hello world response',
		});
	}

	@Get('/out')
	@HttpCode(404) // para aclarar el estado hhtp
	notFound() {
		return 'not found';
	}
	@Get('/error')
	@HttpCode(500) // para aclarar el estado hhtp
	error() {
		return 'Error Route';
	}

	@Get('ticket/:num')
	getNumber(@Param('num', ParseIntPipe) num: number) {
		//se debee colocar al lado el cambio ya que se considera siemrpe string
		return num + 14;
	}
	@Get('active/:status')
	getStatus(@Param('status', ParseBoolPipe) status: boolean) {
		//se debee colocar al lado el cambio ya que se considera siemrpe string
		console.log(typeof status);
		return status;
	}
	@Get('/greet')
	@UseGuards(AuthGuard)
	greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
		return `hello ${query.name} , tu edad es ${query.age + 40}`;
	}
}
