import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingPollUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pollId" })
  pollId: string;
}

export enum MeetingPollUpdatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class MeetingPollUpdatePollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingPollUpdatePollQuestionsTypeEnum;
}


// MeetingPollUpdatePoll
/** 
 * Poll
**/
export class MeetingPollUpdatePoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: MeetingPollUpdatePollQuestions })
  questions?: MeetingPollUpdatePollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=title, multipart_form, name=title" })
  title?: string;
}


export class MeetingPollUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  poll?: MeetingPollUpdatePoll;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  poll1?: MeetingPollUpdatePoll;
}


export class MeetingPollUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingPollUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingPollUpdatePathParams;

  @SpeakeasyMetadata()
  request: MeetingPollUpdateRequests;

  @SpeakeasyMetadata()
  security: MeetingPollUpdateSecurity;
}


export class MeetingPollUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
