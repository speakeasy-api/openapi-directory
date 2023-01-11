import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostStandaloneInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostStandaloneInvoiceRequest extends SpeakeasyBase {
    headers: PostStandaloneInvoiceHeaders;
    request: Record<string, any>;
}
export declare class PostStandaloneInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postInvoiceResponse?: Record<string, any>;
    statusCode: number;
}
