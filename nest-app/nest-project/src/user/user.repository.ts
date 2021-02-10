import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'; 
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { Hash } from "crypto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async addUserToDb(user:UserDto):Promise<void>{
        const userentity  = new User();
        userentity.username = user.username;
        userentity.password = await this.securePassword(user.password);
    
        try{
            await this.save(userentity);
        }catch(err){
            if(err.errno === 1062)
                throw new ConflictException("User Already Exists");
            else
                throw new InternalServerErrorException();
        }
       
   }


   async securePassword(password:string):Promise<string>{
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;
   }

   async comparePassword(password:string,hashedPassword:string):Promise<boolean>{
        const res  = await bcrypt.compare(password,hashedPassword);
        return res;
   }

   
}