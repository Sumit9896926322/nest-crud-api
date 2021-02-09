import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatController } from './cat.controller';
import catEntity from './cat.entity';
import { catMiddleware } from './cat.middleware';
import CatRepository from './cat.repository';
import { CatService } from './cat.service';
import constants from './constants';


@Module({
  imports:[TypeOrmModule.forFeature([CatRepository,catEntity])],
  controllers: [CatController],
  providers: [CatService],
  exports:[CatService]
})
export class CatModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(catMiddleware)
    .forRoutes(CatService);
  }

}
