import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarRegistrantQuestionUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


// WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions
/** 
 * Webinar Registrant Questions
**/
export class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_questions, multipart_form, name=custom_questions;json=true" })
  customQuestions?: any[];

  @SpeakeasyMetadata({ data: "json, name=questions, multipart_form, name=questions;json=true" })
  questions?: any[];
}


export class WebinarRegistrantQuestionUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  webinarRegistrantQuestions?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  webinarRegistrantQuestions1?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;
}


export class WebinarRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarRegistrantQuestionUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarRegistrantQuestionUpdatePathParams;

  @SpeakeasyMetadata()
  request: WebinarRegistrantQuestionUpdateRequests;

  @SpeakeasyMetadata()
  security: WebinarRegistrantQuestionUpdateSecurity;
}


export class WebinarRegistrantQuestionUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
