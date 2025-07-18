/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DBExperience } from './experience.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(DBExperience)
    private readonly ExoerienceRepo: Repository<DBExperience>,
  ) {}

  async getExperience(): Promise<DBExperience | { message: string }> {
    const record = await this.ExoerienceRepo.findOne({ where: { num: 0 } });
    return record ?? { message: 'No content found' };
  }
}
