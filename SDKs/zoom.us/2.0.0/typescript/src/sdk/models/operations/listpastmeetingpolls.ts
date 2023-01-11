import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPastMeetingPollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class ListPastMeetingPollsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=polling_id" })
  pollingId?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ListPastMeetingPolls200ApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=question_details", elemType: ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails })
  questionDetails?: ListPastMeetingPolls200ApplicationJsonQuestionsQuestionDetails[];
}


export class ListPastMeetingPolls200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: ListPastMeetingPolls200ApplicationJsonQuestions })
  questions?: ListPastMeetingPolls200ApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ListPastMeetingPollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPastMeetingPollsPathParams;

  @SpeakeasyMetadata()
  security: ListPastMeetingPollsSecurity;
}


export class ListPastMeetingPollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPastMeetingPolls200ApplicationJSONObject?: ListPastMeetingPolls200ApplicationJson;
}
