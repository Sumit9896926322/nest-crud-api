import { Injectable } from '@nestjs/common';
import cat from './cat/cat.model';
import {CatService} from './cat/cat.service';

@Injectable()
export class AppService {
  constructor(private catService:CatService,private appService:AppService){}

  getHello():cat {
    console.log(this.appService);
    return this.catService.getCat(1);
  }
}
