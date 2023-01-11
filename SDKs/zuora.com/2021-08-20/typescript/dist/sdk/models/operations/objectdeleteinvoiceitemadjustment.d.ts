import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectDeleteInvoiceItemAdjustmentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectDeleteInvoiceItemAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectDeleteInvoiceItemAdjustmentRequest extends SpeakeasyBase {
    pathParams: ObjectDeleteInvoiceItemAdjustmentPathParams;
    headers: ObjectDeleteInvoiceItemAdjustmentHeaders;
}
export declare class ObjectDeleteInvoiceItemAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyDeleteResponse?: shared.ProxyDeleteResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
