import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';

@Module({
  imports: [CatModule,
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username":"root",
      "password": "bitcs",
      "database": "cats",
      "entities": [],
      "synchronize": true
    })],
  // controllers: [CatController],
  // providers: [AppService,CatService],
})
export class AppModule {}
