import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
  Request,
  UnauthorizedException,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.email ||
      !createUserDto.first_name ||
      !createUserDto.last_name
    ) {
      throw new BadRequestException('error');
    }
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Post('/request')
  requestTest(@Request() request) {
    console.log(request);
  }

  @Get()
  async findAll(@Query() query) {
    console.log(query);
    const users = await this.usersService.findAll();
    return { message: 'success', users };
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }*/
}
