import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetRefundInvoicePaymentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetRefundInvoicePaymentQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetRefundInvoicePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetRefundInvoicePaymentRequest extends SpeakeasyBase {
    pathParams: ObjectGetRefundInvoicePaymentPathParams;
    queryParams: ObjectGetRefundInvoicePaymentQueryParams;
    headers: ObjectGetRefundInvoicePaymentHeaders;
}
export declare class ObjectGetRefundInvoicePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetRefundInvoicePayment?: shared.ProxyGetRefundInvoicePayment;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
