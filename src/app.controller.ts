import {
  Controller,
  Get,
  // Req,
  Query,
  Redirect,
  // Param,
  // Res,
  // HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
// import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com/', 302)
  getDocs(@Query('version') version) {
    console.log(version);
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
