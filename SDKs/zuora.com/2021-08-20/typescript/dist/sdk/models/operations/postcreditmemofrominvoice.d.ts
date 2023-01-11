import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCreditMemoFromInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PostCreditMemoFromInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostCreditMemoFromInvoiceRequest extends SpeakeasyBase {
    pathParams: PostCreditMemoFromInvoicePathParams;
    headers: PostCreditMemoFromInvoiceHeaders;
    request: Record<string, any>;
}
export declare class PostCreditMemoFromInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
