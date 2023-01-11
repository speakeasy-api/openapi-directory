import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPastWebinarQaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class ListPastWebinarQaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ListPastWebinarQa200ApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=question_details", elemType: ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails })
  questionDetails?: ListPastWebinarQa200ApplicationJsonQuestionsQuestionDetails[];
}


export class ListPastWebinarQa200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: ListPastWebinarQa200ApplicationJsonQuestions })
  questions?: ListPastWebinarQa200ApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ListPastWebinarQaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPastWebinarQaPathParams;

  @SpeakeasyMetadata()
  security: ListPastWebinarQaSecurity;
}


export class ListPastWebinarQaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPastWebinarQA200ApplicationJSONObject?: ListPastWebinarQa200ApplicationJson;
}
