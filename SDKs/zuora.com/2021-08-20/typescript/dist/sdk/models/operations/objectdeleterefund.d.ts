import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteRefundPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteRefundRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteRefundPathParams;
    headers: ObjectDeleteRefundHeaders;
}
export declare class ObjectDeleteRefundResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
