import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportWebinarPollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class ReportWebinarPollsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=polling_id" })
  pollingId?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ReportWebinarPolls200ApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=question_details", elemType: ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails })
  questionDetails?: ReportWebinarPolls200ApplicationJsonQuestionsQuestionDetails[];
}


export class ReportWebinarPolls200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: ReportWebinarPolls200ApplicationJsonQuestions })
  questions?: ReportWebinarPolls200ApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ReportWebinarPollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportWebinarPollsPathParams;

  @SpeakeasyMetadata()
  security: ReportWebinarPollsSecurity;
}


export class ReportWebinarPollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportWebinarPolls200ApplicationJSONObject?: ReportWebinarPolls200ApplicationJson;
}
