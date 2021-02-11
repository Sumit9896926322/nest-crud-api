import { HttpException, HttpStatus } from "@nestjs/common";
import { UserDto } from "src/user/user.dto";
import { EntityRepository, Repository } from "typeorm";
import catEntity from "./cat.entity";
import catDto from "./dto/cat.dto";

@EntityRepository(catEntity)
export default class CatRepository extends Repository<catEntity> {
    async addToDb(cat:catDto,user:UserDto):Promise<catEntity>{
        const catentity  = new catEntity();
        catentity.name = cat.name;
        catentity.age = cat.age;
        catentity.breed = cat.breed;
        catentity.username = user.username;//user is authorised by passport ans extracted by jwt
       
       const res = await this.save(catentity);
       return res;
   }

   async getCatsFromDb(user:UserDto):Promise<catEntity[]>{
    const query = this.createQueryBuilder('cats');
    
     query.where("cats.username = :username", { username: user.username })

    let res =await query.getMany();
    return res;
   }

   async getCatFromDb(id:number):Promise<catEntity>{
    let res =await this.findOne(id);
    if(!res)
        throw new HttpException(`cat with id ${id} not found`, HttpStatus.NOT_FOUND);
    return res;
}

async updateCatInDb(id:number,cat:catDto,user:UserDto):Promise<catEntity[]>{

    this.createQueryBuilder('cats')
    .update('cat_entity')
    .set({name:cat.name,age:cat.age,breed:cat.breed})
    .where("username = :username", { username:user.username })
    .execute();
    
    // let catToBeChanged =await this.findOne({user});
    
    // catToBeChanged.name = cat.name;
    // catToBeChanged.age = cat.age;
    // catToBeChanged.breed = cat.breed;
    // await this.save(catToBeChanged);
    const cats = await this.getCatsFromDb(user);//need to fix ,sends userDto from user Controller
    return cats;
}
 
async deleteCatFromDb(id:number,user:UserDto):Promise<catEntity[]>{
    this.createQueryBuilder()
    .delete()
    .from('cat_entity')
    .where("username = :username", { username:user.username })
    .execute();
    const cats = await this.getCatsFromDb(user);//need to fix ,sends userDto from user Controller
    return cats;
}
}