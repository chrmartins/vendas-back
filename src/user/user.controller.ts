import { CreateUserDto } from './dtos/createUser.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.cretaeUser(createUser);
  }

  @Get()
  async getAllUsers(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUsers()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }
}
