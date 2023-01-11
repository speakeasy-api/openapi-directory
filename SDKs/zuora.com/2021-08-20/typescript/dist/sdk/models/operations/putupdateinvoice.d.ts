import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutUpdateInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PutUpdateInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdateInvoiceRequest extends SpeakeasyBase {
    pathParams: PutUpdateInvoicePathParams;
    headers: PutUpdateInvoiceHeaders;
    request: Record<string, any>;
}
export declare class PutUpdateInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putInvoiceResponseType?: Record<string, any>;
    statusCode: number;
}
