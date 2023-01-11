import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarPollsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum WebinarPollsPollListPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class WebinarPollsPollListPollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WebinarPollsPollListPollQuestionsTypeEnum;
}

export enum WebinarPollsPollListPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


// WebinarPollsPollListPoll
/** 
 * Poll
**/
export class WebinarPollsPollListPoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: WebinarPollsPollListPollQuestions })
  questions?: WebinarPollsPollListPollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WebinarPollsPollListPollStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// WebinarPollsPollList
/** 
 * Poll List
**/
export class WebinarPollsPollList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=polls", elemType: WebinarPollsPollListPoll })
  polls?: WebinarPollsPollListPoll[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class WebinarPollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPollsPathParams;

  @SpeakeasyMetadata()
  security: WebinarPollsSecurity;
}


export class WebinarPollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pollList?: WebinarPollsPollList;

  @SpeakeasyMetadata()
  statusCode: number;
}
