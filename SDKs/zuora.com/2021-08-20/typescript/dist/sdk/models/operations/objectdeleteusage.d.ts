import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteUsagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteUsageHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteUsageRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteUsagePathParams;
    headers: ObjectDeleteUsageHeaders;
}
export declare class ObjectDeleteUsageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
