import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebinarRegistrantQuestionUpdatePathParams extends SpeakeasyBase {
    webinarId: number;
}
/**
 * Webinar Registrant Questions
**/
export declare class WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions extends SpeakeasyBase {
    customQuestions?: any[];
    questions?: any[];
}
export declare class WebinarRegistrantQuestionUpdateRequests extends SpeakeasyBase {
    webinarRegistrantQuestions?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;
    webinarRegistrantQuestions1?: WebinarRegistrantQuestionUpdateWebinarRegistrantQuestions;
}
export declare class WebinarRegistrantQuestionUpdateSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class WebinarRegistrantQuestionUpdateRequest extends SpeakeasyBase {
    pathParams: WebinarRegistrantQuestionUpdatePathParams;
    request: WebinarRegistrantQuestionUpdateRequests;
    security: WebinarRegistrantQuestionUpdateSecurity;
}
export declare class WebinarRegistrantQuestionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
