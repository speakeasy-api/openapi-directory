import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadFileForDebitMemoPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class PostUploadFileForDebitMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostUploadFileForDebitMemoRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostUploadFileForDebitMemoRequestBody extends SpeakeasyBase {
    file?: PostUploadFileForDebitMemoRequestBodyFile;
}
export declare class PostUploadFileForDebitMemoRequest extends SpeakeasyBase {
    pathParams: PostUploadFileForDebitMemoPathParams;
    headers: PostUploadFileForDebitMemoHeaders;
    request?: PostUploadFileForDebitMemoRequestBody;
}
export declare class PostUploadFileForDebitMemoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postUploadFileResponse?: shared.PostUploadFileResponse;
    statusCode: number;
}
