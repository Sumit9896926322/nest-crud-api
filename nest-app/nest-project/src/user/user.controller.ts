import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}
    
    @Post('/add')
    addUser(@Body(ValidationPipe) userDto:UserDto){
        return this.userService.addUser(userDto);
    }
}
