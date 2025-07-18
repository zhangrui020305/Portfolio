/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get('getYear')
  async getYear(): Promise<string> {
    const experience = await this.experienceService.getExperience();
    if ('message' in experience) {
      return experience.message;
    }
    return experience.year;
  }

  @Get('getRole')
  async getRole(): Promise<string> {
    const experience = await this.experienceService.getExperience();
    if ('message' in experience) {
      return experience.message;
    }
    return experience.role;
  }

  @Get('getCompany')
  async getCompany(): Promise<string> {
    const experience = await this.experienceService.getExperience();
    if ('message' in experience) {
      return experience.message;
    }
    return experience.company;
  }

  @Get('getDescription')
  async getDescription(): Promise<string> {
    const experience = await this.experienceService.getExperience();
    if ('message' in experience) {
      return experience.message;
    }
    return experience.description;
  }

  @Get('getTechnologies')
  async getTechnologies(): Promise<string> {
    const experience = await this.experienceService.getExperience();
    if ('message' in experience) {
      return experience.message;
    }
    return experience.technologies;
  }
}
