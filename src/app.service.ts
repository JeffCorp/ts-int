import { Injectable } from '@nestjs/common';
import { Client } from '@hubspot/api-client';
import { GetMeetingsDto } from './dto/get-meetings.dto';

const hubspotClient = new Client({
  accessToken: 'pat-eu1-818bd8d9-f9ff-4f4c-a105-039efb5e112a'
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMeetings(params: any) {
    return hubspotClient.crm.objects.meetings.searchApi.doSearch(
      params
    );
  }

  getOwners(params: GetMeetingsDto) {
    return hubspotClient.crm.owners.ownersApi.getPage(
      params.after
    );
  }

  getOwner(id: string) {
    return hubspotClient.crm.owners.ownersApi.getById(
      Number(id)
    );
  }

  batchUpdateMeetings(data, id: string) {
    return hubspotClient.crm.objects.meetings.batchApi.update({
      inputs: [{
        id: id,
        ...data
      }]
    });
  }

  batchDeleteMeetings(data) {
    return hubspotClient.crm.objects.meetings.batchApi.archive(data);
  }
}
