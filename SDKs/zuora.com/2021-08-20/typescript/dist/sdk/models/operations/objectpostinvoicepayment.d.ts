import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostInvoicePaymentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostInvoicePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostInvoicePaymentRequest extends SpeakeasyBase {
    queryParams: ObjectPostInvoicePaymentQueryParams;
    headers: ObjectPostInvoicePaymentHeaders;
    request: shared.ProxyCreateInvoicePayment;
}
export declare class ObjectPostInvoicePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyBadRequestResponse?: shared.ProxyBadRequestResponse;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
