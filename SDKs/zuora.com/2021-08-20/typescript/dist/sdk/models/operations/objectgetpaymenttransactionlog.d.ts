import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetPaymentTransactionLogPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetPaymentTransactionLogHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetPaymentTransactionLogRequest extends SpeakeasyBase {
    pathParams: ObjectGetPaymentTransactionLogPathParams;
    headers: ObjectGetPaymentTransactionLogHeaders;
}
export declare class ObjectGetPaymentTransactionLogResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetPaymentTransactionLog?: shared.ProxyGetPaymentTransactionLog;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
