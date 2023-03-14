import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingController } from './meeting.controller';
import { OwnerController } from './owner.controller';

@Module({
  imports: [],
  controllers: [AppController, OwnerController, MeetingController],
  providers: [AppService],
})
export class AppModule {}
