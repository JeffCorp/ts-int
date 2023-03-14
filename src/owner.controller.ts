import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('owners')
export class OwnerController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getOwners(@Body() params: any) {
        return this.appService.getOwners(params);
    }

    @Get(':id')
    getOwner(@Param('id') id: string) {
        return this.appService.getOwner(id);
    }
}
