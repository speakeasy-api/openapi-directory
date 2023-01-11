import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRenewSubscriptionPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class PutRenewSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PutRenewSubscriptionRequest extends SpeakeasyBase {
    pathParams: PutRenewSubscriptionPathParams;
    headers: PutRenewSubscriptionHeaders;
    request: shared.PutRenewSubscriptionType;
}
export declare class PutRenewSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putRenewSubscriptionResponseType?: shared.PutRenewSubscriptionResponseType;
    statusCode: number;
}
