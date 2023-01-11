import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPollGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pollId" })
  pollId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarPollGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum WebinarPollGetPollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class WebinarPollGetPollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WebinarPollGetPollQuestionsTypeEnum;
}

export enum WebinarPollGetPollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


// WebinarPollGetPoll
/** 
 * Poll
**/
export class WebinarPollGetPoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: WebinarPollGetPollQuestions })
  questions?: WebinarPollGetPollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WebinarPollGetPollStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class WebinarPollGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPollGetPathParams;

  @SpeakeasyMetadata()
  security: WebinarPollGetSecurity;
}


export class WebinarPollGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  poll?: WebinarPollGetPoll;

  @SpeakeasyMetadata()
  statusCode: number;
}
