import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadInvoicePdfPathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class DownloadInvoicePdfRequest extends SpeakeasyBase {
    pathParams: DownloadInvoicePdfPathParams;
}
export declare class DownloadInvoicePdfResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    downloadInvoicePDF200ApplicationJSONAny?: any;
}
