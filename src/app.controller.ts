import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserType } from './UserType';

const path = 'users';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(path)
  getUsers(): UserType[] {
    return this.appService.getUsers();
  }

  @Post(path)
  addUsers(@Body() user: UserType): UserType[] {
    return this.appService.addUsers(user);
  }

  @Put(`${path}/checkIn`)
  checkIn(@Query('userId') userId: number): UserType {
    return this.appService.checkIn(userId);
  }

  @Put(`${path}/checkOut`)
  checkOut(@Query('userId') userId: number): UserType {
    return this.appService.checkOut(userId);
  }
}
