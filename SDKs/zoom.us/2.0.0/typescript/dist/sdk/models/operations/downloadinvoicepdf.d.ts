import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadInvoicePDFRequest extends SpeakeasyBase {
    invoiceId: string;
}
export declare class DownloadInvoicePDFResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Account billing invoice PDF returned.
     */
    downloadInvoicePDF200ApplicationJSONAny?: any;
}
