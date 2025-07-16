import { TittleService } from './tittle.service';
import { TittleController } from './tittle.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBcontent } from './title.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DBcontent])],
  controllers: [TittleController],
  providers: [TittleService],
})
export class TittleModule {}
