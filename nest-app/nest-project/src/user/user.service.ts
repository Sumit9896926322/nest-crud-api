import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService:JwtService
    ){}

    async addUser(user:UserDto):Promise<void>{
        const res = await this.userRepository.addUserToDb(user);
        return res;
    }


    async validateUserPassword(userdto:UserDto):Promise<string>{
        const {username,password} = userdto;
        const user = await this.userRepository.findOne({username});
        if(user){
            const isPasswordCorrect =  await this.userRepository.comparePassword(password,user.password);

            if(isPasswordCorrect){
                const payload = {user};
                const accessToken = this.jwtService.sign(payload);
                return accessToken;
            }
              
            return 'Either of username and password is wrong';
        }
        return 'Either of username and password is wrong';
    }


}