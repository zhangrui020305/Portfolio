import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBContact } from './contact.entity';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
    imports: [TypeOrmModule.forFeature([DBContact])],
    controllers: [ContactController],
    providers: [ContactService],
})
export class ContactModule {}
