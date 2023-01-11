import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingPollGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pollId" })
  pollId: string;
}


export class MeetingPollGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum MeetingPollGetPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class MeetingPollGetPollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingPollGetPollQuestionsTypeEnum;
}

export enum MeetingPollGetPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


// MeetingPollGetPoll
/** 
 * Poll
**/
export class MeetingPollGetPoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: MeetingPollGetPollQuestions })
  questions?: MeetingPollGetPollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MeetingPollGetPollStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class MeetingPollGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingPollGetPathParams;

  @SpeakeasyMetadata()
  security: MeetingPollGetSecurity;
}


export class MeetingPollGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  poll?: MeetingPollGetPoll;

  @SpeakeasyMetadata()
  statusCode: number;
}
