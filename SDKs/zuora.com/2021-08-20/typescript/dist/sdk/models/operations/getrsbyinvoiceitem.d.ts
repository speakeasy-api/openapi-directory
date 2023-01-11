import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRSbyInvoiceItemPathParams extends SpeakeasyBase {
    invoiceItemId: string;
}
export declare class GetRSbyInvoiceItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRSbyInvoiceItemRequest extends SpeakeasyBase {
    pathParams: GetRSbyInvoiceItemPathParams;
    headers: GetRSbyInvoiceItemHeaders;
}
export declare class GetRSbyInvoiceItemResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
