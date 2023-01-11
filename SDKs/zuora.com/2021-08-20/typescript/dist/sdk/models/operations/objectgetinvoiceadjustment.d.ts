import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetInvoiceAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetInvoiceAdjustmentQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetInvoiceAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetInvoiceAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectGetInvoiceAdjustmentPathParams;
    queryParams: ObjectGetInvoiceAdjustmentQueryParams;
    headers: ObjectGetInvoiceAdjustmentHeaders;
}
export declare class ObjectGetInvoiceAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetInvoiceAdjustment?: Record<string, any>;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
