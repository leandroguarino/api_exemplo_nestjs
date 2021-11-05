import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('clientes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('listar')
  getHello(): any[] {
    return this.appService.getList();
  }
}
