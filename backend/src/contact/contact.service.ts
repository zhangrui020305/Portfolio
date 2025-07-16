import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DBContact } from './contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(DBContact)
    private readonly contactRepo: Repository<DBContact>,
  ) {}

  // return DBContact this object or message "No content found"
  async getContact(): Promise<DBContact | { message: string }> {
    const record = await this.contactRepo.findOne({ where: { num: 0 } });
    return record ?? { message: 'No content found' };
  }
}
