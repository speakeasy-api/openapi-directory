import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPutInvoicePaymentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectPutInvoicePaymentQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPutInvoicePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPutInvoicePaymentRequest extends SpeakeasyBase {
    pathParams: ObjectPutInvoicePaymentPathParams;
    queryParams: ObjectPutInvoicePaymentQueryParams;
    headers: ObjectPutInvoicePaymentHeaders;
    request: shared.ProxyModifyInvoicePayment;
}
export declare class ObjectPutInvoicePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
