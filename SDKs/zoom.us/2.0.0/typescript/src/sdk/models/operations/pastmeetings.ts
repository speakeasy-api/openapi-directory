import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PastMeetingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class PastMeetingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PastMeetingsMeetingInstancesMeetings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// PastMeetingsMeetingInstances
/** 
 * List of Meetings
**/
export class PastMeetingsMeetingInstances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: PastMeetingsMeetingInstancesMeetings })
  meetings?: PastMeetingsMeetingInstancesMeetings[];
}


export class PastMeetingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PastMeetingsPathParams;

  @SpeakeasyMetadata()
  security: PastMeetingsSecurity;
}


export class PastMeetingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  meetingInstances?: PastMeetingsMeetingInstances;

  @SpeakeasyMetadata()
  statusCode: number;
}
