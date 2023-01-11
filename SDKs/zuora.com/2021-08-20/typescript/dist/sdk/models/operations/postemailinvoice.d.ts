import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEmailInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PostEmailInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEmailInvoiceRequest extends SpeakeasyBase {
    pathParams: PostEmailInvoicePathParams;
    headers: PostEmailInvoiceHeaders;
    request: shared.PostInvoiceEmailRequestType;
}
export declare class PostEmailInvoiceResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
