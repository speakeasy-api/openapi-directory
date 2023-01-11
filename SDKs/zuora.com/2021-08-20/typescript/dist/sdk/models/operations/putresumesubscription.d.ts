import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutResumeSubscriptionPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class PutResumeSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PutResumeSubscriptionRequest extends SpeakeasyBase {
    pathParams: PutResumeSubscriptionPathParams;
    headers: PutResumeSubscriptionHeaders;
    request: shared.PutSubscriptionResumeType;
}
export declare class PutResumeSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putSubscriptionResumeResponseType?: shared.PutSubscriptionResumeResponseType;
    statusCode: number;
}
