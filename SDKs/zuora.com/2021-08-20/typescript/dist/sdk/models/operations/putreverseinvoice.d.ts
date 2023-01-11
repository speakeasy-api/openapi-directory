import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutReverseInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PutReverseInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutReverseInvoiceRequest extends SpeakeasyBase {
    pathParams: PutReverseInvoicePathParams;
    headers: PutReverseInvoiceHeaders;
    request: shared.PutReverseInvoiceType;
}
export declare class PutReverseInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putReverseInvoiceResponseType?: shared.PutReverseInvoiceResponseType;
    statusCode: number;
}
