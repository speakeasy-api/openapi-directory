import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetPaymentMethodTransactionLogPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetPaymentMethodTransactionLogQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetPaymentMethodTransactionLogHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetPaymentMethodTransactionLogRequest extends SpeakeasyBase {
    pathParams: ObjectGetPaymentMethodTransactionLogPathParams;
    queryParams: ObjectGetPaymentMethodTransactionLogQueryParams;
    headers: ObjectGetPaymentMethodTransactionLogHeaders;
}
export declare class ObjectGetPaymentMethodTransactionLogResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetPaymentMethodTransactionLog?: shared.ProxyGetPaymentMethodTransactionLog;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
