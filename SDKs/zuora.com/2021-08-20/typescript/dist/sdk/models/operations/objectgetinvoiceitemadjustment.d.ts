import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoiceItemAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoiceItemAdjustmentQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoiceItemAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoiceItemAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoiceItemAdjustmentPathParams;
    queryParams: ObjectGetInvoiceItemAdjustmentQueryParams;
    headers: ObjectGetInvoiceItemAdjustmentHeaders;
}
export declare class ObjectGetInvoiceItemAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoiceItemAdjustment?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
