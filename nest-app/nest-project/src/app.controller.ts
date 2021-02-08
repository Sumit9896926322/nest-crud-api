import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import cat from './cat/cat.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello here';
  }
}
