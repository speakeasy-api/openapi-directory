import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingPollCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}

export enum MeetingPollCreatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class MeetingPollCreatePollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingPollCreatePollQuestionsTypeEnum;
}


// MeetingPollCreatePoll
/** 
 * Poll
**/
export class MeetingPollCreatePoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: MeetingPollCreatePollQuestions })
  questions?: MeetingPollCreatePollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=title, multipart_form, name=title" })
  title?: string;
}


export class MeetingPollCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  poll?: MeetingPollCreatePoll;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  poll1?: MeetingPollCreatePoll;
}


export class MeetingPollCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum MeetingPollCreatePollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


// MeetingPollCreatePoll2
/** 
 * Poll
**/
export class MeetingPollCreatePoll2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: MeetingPollCreatePollQuestions })
  questions?: MeetingPollCreatePollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MeetingPollCreatePollStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class MeetingPollCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingPollCreatePathParams;

  @SpeakeasyMetadata()
  request: MeetingPollCreateRequests;

  @SpeakeasyMetadata()
  security: MeetingPollCreateSecurity;
}


export class MeetingPollCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  poll?: MeetingPollCreatePoll2;

  @SpeakeasyMetadata()
  statusCode: number;
}
