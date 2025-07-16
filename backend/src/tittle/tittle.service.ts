import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBcontent } from './title.entity';

@Injectable()
export class TittleService {
  constructor(
    @InjectRepository(DBcontent)
    private readonly contentRepo: Repository<DBcontent>,
  ) {}

  async getContent(): Promise<string> {
    const record = await this.contentRepo.findOne({ where: { num:0 } });
    console.log("Record found", record);
    return record?.content ?? 'No content found';
  }
}
