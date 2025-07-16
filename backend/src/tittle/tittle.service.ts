import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { db_content } from './title.entity';

@Injectable()
export class TittleService {
  constructor(
    @InjectRepository(db_content)
    private readonly contentRepo: Repository<db_content>,
  ) {}

  async getContent(): Promise<string> {
    const record = await this.contentRepo.findOne({ where: { num:0 } });
    console.log("Record found", record);
    return record?.content ?? 'No content found';
  }
}
