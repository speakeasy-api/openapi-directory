import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteSubscriptionRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteSubscriptionPathParams;
    headers: ObjectDeleteSubscriptionHeaders;
}
export declare class ObjectDeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
