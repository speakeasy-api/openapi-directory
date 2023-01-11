import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingInvitationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// MeetingInvitationMeetingInvitation
/** 
 * Meeting invitation details.
**/
export class MeetingInvitationMeetingInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitation" })
  invitation?: string;
}


export class MeetingInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingInvitationPathParams;

  @SpeakeasyMetadata()
  security: MeetingInvitationSecurity;
}


export class MeetingInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  meetingInvitation?: MeetingInvitationMeetingInvitation;

  @SpeakeasyMetadata()
  statusCode: number;
}
