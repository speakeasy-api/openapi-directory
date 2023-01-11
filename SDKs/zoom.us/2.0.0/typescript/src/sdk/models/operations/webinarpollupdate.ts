import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPollUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pollId" })
  pollId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}

export enum WebinarPollUpdatePollQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class WebinarPollUpdatePollQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WebinarPollUpdatePollQuestionsTypeEnum;
}


// WebinarPollUpdatePoll
/** 
 * Poll
**/
export class WebinarPollUpdatePoll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true", elemType: WebinarPollUpdatePollQuestions })
  questions?: WebinarPollUpdatePollQuestions[];

  @SpeakeasyMetadata({ data: "json, name=title, multipart_form, name=title" })
  title?: string;
}


export class WebinarPollUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  poll?: WebinarPollUpdatePoll;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  poll1?: WebinarPollUpdatePoll;
}


export class WebinarPollUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarPollUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPollUpdatePathParams;

  @SpeakeasyMetadata()
  request: WebinarPollUpdateRequests;

  @SpeakeasyMetadata()
  security: WebinarPollUpdateSecurity;
}


export class WebinarPollUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
