import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRSbyInvoiceItemAdjustmentPathParams extends SpeakeasyBase {
    invoiceItemAdjKey: string;
}
export declare class GetRSbyInvoiceItemAdjustmentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRSbyInvoiceItemAdjustmentRequest extends SpeakeasyBase {
    pathParams: GetRSbyInvoiceItemAdjustmentPathParams;
    headers: GetRSbyInvoiceItemAdjustmentHeaders;
}
export declare class GetRSbyInvoiceItemAdjustmentResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
