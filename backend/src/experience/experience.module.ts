import { TypeOrmModule } from '@nestjs/typeorm';
import { DBExperience } from './experience.entity';
import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';


@Module({
imports: [TypeOrmModule.forFeature([DBExperience])],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}
