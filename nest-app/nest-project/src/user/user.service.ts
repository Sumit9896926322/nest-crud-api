import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){}

    async addUser(user:UserDto):Promise<void>{
        const res = await this.userRepository.addUserToDb(user);
        return res;
    }
}
