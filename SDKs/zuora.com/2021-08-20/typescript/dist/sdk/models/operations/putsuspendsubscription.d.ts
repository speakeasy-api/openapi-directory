import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSuspendSubscriptionPathParams extends SpeakeasyBase {
    subscriptionKey: string;
}
export declare class PutSuspendSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PutSuspendSubscriptionRequest extends SpeakeasyBase {
    pathParams: PutSuspendSubscriptionPathParams;
    headers: PutSuspendSubscriptionHeaders;
    request: shared.PutSubscriptionSuspendType;
}
export declare class PutSuspendSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putSubscriptionSuspendResponseType?: shared.PutSubscriptionSuspendResponseType;
    statusCode: number;
}
