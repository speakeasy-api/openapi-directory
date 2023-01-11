import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSubscriptionPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class PutSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PutSubscriptionRequest extends SpeakeasyBase {
    pathParams: PutSubscriptionPathParams;
    headers: PutSubscriptionHeaders;
    request: Record<string, any>;
}
export declare class PutSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putSubscriptionResponseType?: shared.PutSubscriptionResponseType;
    statusCode: number;
}
