import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarRegistrantsQuestionsGetPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class WebinarRegistrantsQuestionsGetSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Webinar Registrant Questions
**/
export declare class WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions extends SpeakeasyBase {
    customQuestions?: any[];
    questions?: any[];
}
export declare class WebinarRegistrantsQuestionsGetRequest extends SpeakeasyBase {
    pathParams: WebinarRegistrantsQuestionsGetPathParams;
    security: WebinarRegistrantsQuestionsGetSecurity;
}
export declare class WebinarRegistrantsQuestionsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webinarRegistrantQuestions?: WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions;
}
