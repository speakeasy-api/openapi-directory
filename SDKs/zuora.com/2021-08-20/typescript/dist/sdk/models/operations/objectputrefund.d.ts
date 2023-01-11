import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutRefundPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutRefundQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutRefundHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutRefundRequest extends SpeakeasyBase {
    pathParams: ObjectPutRefundPathParams;
    queryParams: ObjectPutRefundQueryParams;
    headers: ObjectPutRefundHeaders;
    request: Record<string, any>;
}
export declare class ObjectPutRefundResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
