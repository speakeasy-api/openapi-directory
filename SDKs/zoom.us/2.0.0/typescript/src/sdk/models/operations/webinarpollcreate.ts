import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPollCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}

export enum WebinarPollCreatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class WebinarPollCreatePollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WebinarPollCreatePollQuestionsTypeEnum;
}


// WebinarPollCreatePoll
/** 
 * Poll
**/
export class WebinarPollCreatePoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: WebinarPollCreatePollQuestions })
  questions?: WebinarPollCreatePollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=title, multipart_form, name=title" })
  title?: string;
}


export class WebinarPollCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  poll?: WebinarPollCreatePoll;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  poll1?: WebinarPollCreatePoll;
}


export class WebinarPollCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum WebinarPollCreatePollStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


// WebinarPollCreatePoll2
/** 
 * Poll
**/
export class WebinarPollCreatePoll2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: WebinarPollCreatePollQuestions })
  questions?: WebinarPollCreatePollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WebinarPollCreatePollStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class WebinarPollCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPollCreatePathParams;

  @SpeakeasyMetadata()
  request: WebinarPollCreateRequests;

  @SpeakeasyMetadata()
  security: WebinarPollCreateSecurity;
}


export class WebinarPollCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  poll?: WebinarPollCreatePoll2;

  @SpeakeasyMetadata()
  statusCode: number;
}
