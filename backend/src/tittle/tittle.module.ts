import { TittleService } from './tittle.service';
import { TittleController } from './tittle.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db_content } from './title.entity'

@Module({
  imports: [TypeOrmModule.forFeature([db_content])],
  controllers: [TittleController],
  providers: [TittleService],
})
export class TittleModule {}
