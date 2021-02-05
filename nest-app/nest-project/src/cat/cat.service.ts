import { Injectable } from '@nestjs/common';
import catModel from './cat.model';


@Injectable()
export  class CatService {
   private catList:Array<catModel> = [{id:1,name:'jack',age:12,breed:'labra'},{id:2,name:'doby',age:12,breed:'german shepherd'}];
   private catNum = this.catList.length;

   getCats():catModel[]{
       return this.catList;
   }

   getCat(id:number):catModel{
       let catres:catModel;
        this.catList.forEach( cat=>{
            if(cat.id == id)
                catres =  cat;
        });
        return catres;
   }

   addCat(cat:catModel):Array<catModel>{
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
       console.log(id);
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
