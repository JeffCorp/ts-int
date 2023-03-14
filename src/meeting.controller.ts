import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetMeetingsDto } from './dto/get-meetings.dto';

@Controller('meetings')
export class MeetingController {
    constructor(private readonly appService: AppService) { }

    @Post()
    getMeetings(@Body() params: GetMeetingsDto) {
        return this.appService.getMeetings(params);
    }

    @Patch(':id')
    batchUpdateMeetings(@Param('id') id: string, @Body() body: any) {
        console.log(JSON.stringify(id, null, 2));
        return this.appService.batchUpdateMeetings(body, id);
    }

    @Post('archive')
    batchDeleteMeetings(@Body() body: any) {
        return this.appService.batchDeleteMeetings(body);
    }
}
