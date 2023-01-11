import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadFileForInvoicePathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class PostUploadFileForInvoiceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostUploadFileForInvoiceRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostUploadFileForInvoiceRequestBody extends SpeakeasyBase {
    file?: PostUploadFileForInvoiceRequestBodyFile;
}
export declare class PostUploadFileForInvoiceRequest extends SpeakeasyBase {
    pathParams: PostUploadFileForInvoicePathParams;
    headers: PostUploadFileForInvoiceHeaders;
    request?: PostUploadFileForInvoiceRequestBody;
}
export declare class PostUploadFileForInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postUploadFileResponse?: shared.PostUploadFileResponse;
    statusCode: number;
}
