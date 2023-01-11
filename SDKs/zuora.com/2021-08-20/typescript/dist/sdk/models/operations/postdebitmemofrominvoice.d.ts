import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostDebitMemoFromInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PostDebitMemoFromInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class PostDebitMemoFromInvoiceRequest extends SpeakeasyBase {
    pathParams: PostDebitMemoFromInvoicePathParams;
    headers: PostDebitMemoFromInvoiceHeaders;
    request: Record<string, any>;
}
export declare class PostDebitMemoFromInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
