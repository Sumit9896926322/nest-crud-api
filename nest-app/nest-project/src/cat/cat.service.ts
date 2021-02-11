import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Http2ServerRequest } from 'http2';
import catModel from './cat.model';
import CatRepository from './cat.repository';
import catDto from './dto/cat.dto';
import catEntity from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserDto } from 'src/user/user.dto';


@Injectable()
export  class CatService {
    
    constructor(
        @InjectRepository(CatRepository)
        private catRepository:CatRepository
        ){}
 
    private catList = [];
    private catNum = this.catList.length;

   async getCats(user:UserDto):Promise<catEntity[]>{
    const res = await this.catRepository.getCatsFromDb(user);
    return res;
   }

   async getCat(id:number):Promise<catEntity>{
       const res = await this.catRepository.getCatFromDb(id);
        return res;
   }

   async addCat(cat:catDto,user:UserDto):Promise<catEntity>{
       const res = await this.catRepository.addToDb(cat,user);
       return res;
   }


   async deleteCat(id:number,user:UserDto):Promise<catEntity[]>{
       
         const result =await this.catRepository.deleteCatFromDb(id,user);
         return result;
    };



    async updateCat(id:number,cat1:catDto,user:UserDto):Promise<catEntity[]>{
    const cats = await this.catRepository.updateCatInDb(id,cat1,user);
    return cats;
    }

   
}
