import { Controller, Get } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('getAddress')
  async getAddress(): Promise<string> {
    const contact = await this.contactService.getContact();
    if ('message' in contact) {
      return contact.message;
    }
    return contact.address;
  }

  @Get('getPhoneNo')
  async getNum(): Promise<string> {
    const contact = await this.contactService.getContact();
    if ('message' in contact) {
      return contact.message;
    }
    return contact.phoneNo;
  }

  @Get('getEmail')
  async getEmail(): Promise<string> {
    const contact = await this.contactService.getContact();
    if ('message' in contact) {
      return contact.message;
    }
    return contact.email;
  }
}
