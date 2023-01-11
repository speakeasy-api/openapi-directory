import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoicePaymentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoicePaymentQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoicePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoicePaymentRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoicePaymentPathParams;
    queryParams: ObjectGetInvoicePaymentQueryParams;
    headers: ObjectGetInvoicePaymentHeaders;
}
export declare class ObjectGetInvoicePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoicePayment?: shared.ProxyGetInvoicePayment;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
