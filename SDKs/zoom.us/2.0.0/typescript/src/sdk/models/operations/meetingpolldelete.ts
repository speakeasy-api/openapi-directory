import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingPollDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pollId" })
  pollId: string;
}


export class MeetingPollDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingPollDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingPollDeletePathParams;

  @SpeakeasyMetadata()
  security: MeetingPollDeleteSecurity;
}


export class MeetingPollDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
