import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteInvoiceAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteInvoiceAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteInvoiceAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteInvoiceAdjustmentPathParams;
    headers: ObjectDeleteInvoiceAdjustmentHeaders;
}
export declare class ObjectDeleteInvoiceAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
