import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWriteOffInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PutWriteOffInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutWriteOffInvoiceRequest extends SpeakeasyBase {
    pathParams: PutWriteOffInvoicePathParams;
    headers: PutWriteOffInvoiceHeaders;
    request: Record<string, any>;
}
export declare class PutWriteOffInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putWriteOffInvoiceResponse?: shared.PutWriteOffInvoiceResponse;
    statusCode: number;
}
