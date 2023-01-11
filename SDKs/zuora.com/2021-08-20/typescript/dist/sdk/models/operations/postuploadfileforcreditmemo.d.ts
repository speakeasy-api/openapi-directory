import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUploadFileForCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PostUploadFileForCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostUploadFileForCreditMemoRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostUploadFileForCreditMemoRequestBody extends SpeakeasyBase {
    file?: PostUploadFileForCreditMemoRequestBodyFile;
}
export declare class PostUploadFileForCreditMemoRequest extends SpeakeasyBase {
    pathParams: PostUploadFileForCreditMemoPathParams;
    headers: PostUploadFileForCreditMemoHeaders;
    request?: PostUploadFileForCreditMemoRequestBody;
}
export declare class PostUploadFileForCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postUploadFileResponse?: shared.PostUploadFileResponse;
    statusCode: number;
}
