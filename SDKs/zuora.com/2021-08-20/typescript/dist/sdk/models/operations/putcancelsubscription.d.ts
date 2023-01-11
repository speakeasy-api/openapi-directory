import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCancelSubscriptionPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class PutCancelSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PutCancelSubscriptionRequest extends SpeakeasyBase {
    pathParams: PutCancelSubscriptionPathParams;
    headers: PutCancelSubscriptionHeaders;
    request: shared.PostSubscriptionCancellationType;
}
export declare class PutCancelSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postSubscriptionCancellationResponseType?: shared.PostSubscriptionCancellationResponseType;
    statusCode: number;
}
