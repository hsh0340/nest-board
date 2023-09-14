import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return 'kkongchi';
  }

  @Get('name/query')
  getUserNameByQuery(@Query('name') name: string) {
    return name;
  }

  @Get('name/:name')
  getUserName(@Param('name') name: string): string {
    return name;
  }
}
