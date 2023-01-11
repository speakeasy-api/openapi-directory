import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingPollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingPollsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum MeetingPollsPollListPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class MeetingPollsPollListPollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: MeetingPollsPollListPollQuestionsTypeEnum;
}

export enum MeetingPollsPollListPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


// MeetingPollsPollListPoll
/** 
 * Poll
**/
export class MeetingPollsPollListPoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: MeetingPollsPollListPollQuestions })
  questions?: MeetingPollsPollListPollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MeetingPollsPollListPollStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// MeetingPollsPollList
/** 
 * Poll List
**/
export class MeetingPollsPollList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=polls", elemType: MeetingPollsPollListPoll })
  polls?: MeetingPollsPollListPoll[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class MeetingPollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingPollsPathParams;

  @SpeakeasyMetadata()
  security: MeetingPollsSecurity;
}


export class MeetingPollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pollList?: MeetingPollsPollList;

  @SpeakeasyMetadata()
  statusCode: number;
}
