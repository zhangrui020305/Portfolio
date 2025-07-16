import { Controller, Get } from '@nestjs/common';
import { TittleService } from './tittle.service';

@Controller('title')
export class TittleController {
    constructor(private readonly tittleService: TittleService) {}

    @Get('getContent')
    getContent(): Promise<string> {
        return this.tittleService.getContent();
    }
}
