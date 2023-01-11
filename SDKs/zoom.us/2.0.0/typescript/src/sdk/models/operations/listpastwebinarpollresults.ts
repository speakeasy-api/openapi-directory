import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPastWebinarPollResultsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class ListPastWebinarPollResultsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=polling_id" })
  pollingId?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;
}


export class ListPastWebinarPollResults200ApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=question_details", elemType: ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails })
  questionDetails?: ListPastWebinarPollResults200ApplicationJsonQuestionsQuestionDetails[];
}


export class ListPastWebinarPollResults200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: ListPastWebinarPollResults200ApplicationJsonQuestions })
  questions?: ListPastWebinarPollResults200ApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ListPastWebinarPollResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPastWebinarPollResultsPathParams;

  @SpeakeasyMetadata()
  security: ListPastWebinarPollResultsSecurity;
}


export class ListPastWebinarPollResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPastWebinarPollResults200ApplicationJSONObject?: ListPastWebinarPollResults200ApplicationJson;
}
