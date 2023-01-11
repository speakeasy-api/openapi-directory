import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutSubscriptionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutSubscriptionQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutSubscriptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutSubscriptionRequest extends SpeakeasyBase {
    pathParams: ObjectPutSubscriptionPathParams;
    queryParams: ObjectPutSubscriptionQueryParams;
    headers: ObjectPutSubscriptionHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
