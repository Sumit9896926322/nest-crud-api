import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatController } from './cat.controller';
import { catMiddleware } from './cat.middleware';
import { CatService } from './cat.service';
import constants from './constants';

@Module({
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
