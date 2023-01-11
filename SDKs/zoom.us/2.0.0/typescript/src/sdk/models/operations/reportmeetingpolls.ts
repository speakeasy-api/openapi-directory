import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportMeetingPollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class ReportMeetingPollsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=polling_id" })
  pollingId?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ReportMeetingPolls200ApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=question_details", elemType: ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails })
  questionDetails?: ReportMeetingPolls200ApplicationJsonQuestionsQuestionDetails[];
}


export class ReportMeetingPolls200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: ReportMeetingPolls200ApplicationJsonQuestions })
  questions?: ReportMeetingPolls200ApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ReportMeetingPollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportMeetingPollsPathParams;

  @SpeakeasyMetadata()
  security: ReportMeetingPollsSecurity;
}


export class ReportMeetingPollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportMeetingPolls200ApplicationJSONObject?: ReportMeetingPolls200ApplicationJson;
}
