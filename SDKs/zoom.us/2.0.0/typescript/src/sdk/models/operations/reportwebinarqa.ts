import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportWebinarQaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class ReportWebinarQaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ReportWebinarQa200ApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=question_details", elemType: ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails })
  questionDetails?: ReportWebinarQa200ApplicationJsonQuestionsQuestionDetails[];
}


export class ReportWebinarQa200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: ReportWebinarQa200ApplicationJsonQuestions })
  questions?: ReportWebinarQa200ApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ReportWebinarQaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportWebinarQaPathParams;

  @SpeakeasyMetadata()
  security: ReportWebinarQaSecurity;
}


export class ReportWebinarQaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportWebinarQA200ApplicationJSONObject?: ReportWebinarQa200ApplicationJson;
}
