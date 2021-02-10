import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import catEntity from "./cat.entity";
import catDto from "./dto/cat.dto";

@EntityRepository(catEntity)
export default class CatRepository extends Repository<catEntity> {
    async addToDb(cat:catDto,user):Promise<catEntity>{
        const catentity  = new catEntity();
        catentity.name = cat.name;
        catentity.age = cat.age;
        catentity.breed = cat.breed;
        catentity.user = user.name;//user is authorised by passport ans extracted by jwt
       
       const res = await this.save(catentity);
       return res;
   }
   async getCatsFromDb():Promise<catEntity[]>{
    const query = this.createQueryBuilder('cats');
   
    let res =await this.find();
    return res;
   }

   async getCatFromDb(id:number):Promise<catEntity>{
    let res =await this.findOne(id);
    if(!res)
        throw new HttpException(`cat with id ${id} not found`, HttpStatus.NOT_FOUND);
    return res;
}

async updateCatInDb(id:number,cat:catDto):Promise<catEntity[]>{
    let catToBeChanged =await this.findOne(id);
    
    catToBeChanged.name = cat.name;
    catToBeChanged.age = cat.age;
    catToBeChanged.breed = cat.breed;
    await this.save(catToBeChanged);
    const cats = await this.getCatsFromDb();
    return cats;
}

}