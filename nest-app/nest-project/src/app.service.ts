import { Injectable } from '@nestjs/common';
import cat from './cat/cat.model';
import {CatService} from './cat/cat.service';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  constructor(private catService:CatService,private userService:UserService){}

  getHello():string {
    
    return 'helo';
  }
}
