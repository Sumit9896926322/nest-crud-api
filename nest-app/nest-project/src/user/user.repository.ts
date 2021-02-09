import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async addUserToDb(user:UserDto):Promise<void>{
        const userentity  = new User();
        userentity.username = user.username;
        userentity.password = user.password;
    
        await this.save(userentity);
   }

}