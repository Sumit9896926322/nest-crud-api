import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Http2ServerRequest } from 'http2';
import Cat from './cat.entity';
import catModel from './cat.model';
import catDto from './dto/cat.dto';
import CatRepository from './cat.repository';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export  class CatService {

   constructor(
       @InjectRepository(CatRepository)
       private catRepository:CatRepository
   ){}

   private catList:Array<catModel> = [{id:1,name:'jack',age:12,breed:'labra'},{id:2,name:'doby',age:12,breed:'german shepherd'}];
   private catNum = this.catList.length;

   getCats():catModel[]{
       return this.catList;
   }

   getCat(id:number):catModel{
        let res = this.catList.find(cat=> cat.id == id);
        if(!res)
            throw new HttpException(`cat with id ${id} not found`, HttpStatus.NOT_FOUND);
        return res;
   }

   addCat(cat:catDto):Array<catModel>{
        const cat1:catModel = {
            id:++this.catNum,
            name:cat.name,
            age:cat.age,
            breed:cat.breed,
        }
        this.catList.push(cat1);
       return  this.catList;
   }


   deleteCat(id:number):Array<catModel>{
    if(!this.getCat(id))
        throw new HttpException(`cat with id ${id} not found`, HttpStatus.NOT_FOUND);
    this.catList = this.catList.filter((cat) => {
            return cat.id != id;

    });

  

   return  this.catList;
}

updateCat(id:number,cat1:catModel):Array<catModel>{
    this.catList.forEach((cat,index) => {
        if(cat.id == id){
            const newCat:catModel = {
                id:cat1.id,
                name:cat1.name,
                age:cat1.age,
                breed:cat1.breed,
            }
            this.catList[index] = newCat;
            return this.catList;
            
        }

    });
    return this.catList;
}

   
}
