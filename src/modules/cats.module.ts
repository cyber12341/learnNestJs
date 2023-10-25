import { Module } from '@nestjs/common';
import { CatsController } from '../controllers/cats.controller';
import { CatsService } from 'src/services/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
