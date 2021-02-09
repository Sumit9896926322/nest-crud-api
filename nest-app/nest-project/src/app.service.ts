import { Injectable } from '@nestjs/common';
import cat from './cat/cat.model';
import {CatService} from './cat/cat.service';

@Injectable()
export class AppService {
  constructor(private catService:CatService,private appService:AppService){}

  getHello():string {
    console.log(this.appService);
    return 'helo';
  }
}
