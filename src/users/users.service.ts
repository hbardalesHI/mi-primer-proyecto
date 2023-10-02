import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidV4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UsersDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  users: Array<User>;
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  async findAll() {
    const users = await this.usersModel.find();
    return users;
  }

  /*findOne(id: string): User {
    return this.users.filter((user) => {
      return user.id == id;
    })[0];
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((user) => {
      return user.id == id;
    });
    updateUserDto.id = id;
    this.users.splice(index, 1, updateUserDto);
  }

  remove(id: string) {
    const index = this.users.findIndex((user) => {
      return user.id == id;
    });

    this.users.splice(index, 1);
  }*/
}
