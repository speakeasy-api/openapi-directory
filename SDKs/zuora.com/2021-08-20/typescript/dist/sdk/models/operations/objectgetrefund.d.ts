import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetRefundPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetRefundQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetRefundRequest extends SpeakeasyBase {
    pathParams: ObjectGetRefundPathParams;
    queryParams: ObjectGetRefundQueryParams;
    headers: ObjectGetRefundHeaders;
}
export declare class ObjectGetRefundResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetRefund?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
