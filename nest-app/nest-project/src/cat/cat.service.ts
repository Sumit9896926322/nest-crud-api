import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Http2ServerRequest } from 'http2';
import catModel from './cat.model';
import CatRepository from './cat.repository';
import catDto from './dto/cat.dto';
import catEntity from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';


@Injectable()
export  class CatService {
    
    constructor(
        @InjectRepository(CatRepository)
        private catRepository:CatRepository
        ){}
 
    private catList = [];
    private catNum = this.catList.length;

   async getCats():Promise<catEntity[]>{
    const res = await this.catRepository.getCatsFromDb();
    return res;
   }

   async getCat(id:number):Promise<catEntity>{
       const res = await this.catRepository.getCatFromDb(id);
        return res;
   }

   async addCat(cat:catDto,user):Promise<catEntity>{
       const res = await this.catRepository.addToDb(cat,user);
       return res;
   }


   async deleteCat(id:number):Promise<catEntity[]>{
       console.log(id);
         const res = await this.getCat(id);
         await this.catRepository.remove(res);
         const result =await this.getCats();
         return result;
    };



    async updateCat(id:number,cat1:catDto):Promise<catEntity[]>{
    const cats = await this.catRepository.updateCatInDb(id,cat1);
    return cats;
    }

   
}
