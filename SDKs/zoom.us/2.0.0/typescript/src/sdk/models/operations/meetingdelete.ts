import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cancel_meeting_reminder" })
  cancelMeetingReminder?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_for_reminder" })
  scheduleForReminder?: boolean;
}


export class MeetingDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingDeleteQueryParams;

  @SpeakeasyMetadata()
  security: MeetingDeleteSecurity;
}


export class MeetingDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
