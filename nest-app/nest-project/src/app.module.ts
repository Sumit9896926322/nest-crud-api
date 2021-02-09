import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';
import { UserModule } from './user/user.module';
import catEntity from './cat/cat.entity';
import { UserService } from './user/user.service';
import {User} from './user/user.entity';

@Module({
  imports: [CatModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username":"root",
      "password": "bitcs",
      "database": "cats",
      "entities": [
        catEntity,User
      ],
      "synchronize": true
    }),
    UserModule],
  // controllers: [CatController],
  //  providers: [AppService,CatService,UserService],
})
export class AppModule {}
