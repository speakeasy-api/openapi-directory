import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetRefundTransactionLogPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetRefundTransactionLogQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetRefundTransactionLogHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetRefundTransactionLogRequest extends SpeakeasyBase {
    pathParams: ObjectGetRefundTransactionLogPathParams;
    queryParams: ObjectGetRefundTransactionLogQueryParams;
    headers: ObjectGetRefundTransactionLogHeaders;
}
export declare class ObjectGetRefundTransactionLogResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetRefundTransactionLog?: shared.ProxyGetRefundTransactionLog;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
