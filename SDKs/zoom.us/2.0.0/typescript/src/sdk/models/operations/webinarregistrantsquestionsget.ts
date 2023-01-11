import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarRegistrantsQuestionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions
/** 
 * Webinar Registrant Questions
**/
export class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_questions" })
  customQuestions?: any[];

  @SpeakeasyMetadata({ data: "json, name=questions" })
  questions?: any[];
}


export class WebinarRegistrantsQuestionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarRegistrantsQuestionsGetPathParams;

  @SpeakeasyMetadata()
  security: WebinarRegistrantsQuestionsGetSecurity;
}


export class WebinarRegistrantsQuestionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webinarRegistrantQuestions?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions;
}
