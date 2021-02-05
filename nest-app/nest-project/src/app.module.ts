import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';

@Module({
  imports: [CatModule],
  controllers: [CatController],
  providers: [CatService],
})
export class AppModule {}
