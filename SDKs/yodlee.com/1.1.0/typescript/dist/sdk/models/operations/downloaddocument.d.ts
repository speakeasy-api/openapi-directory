import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadDocumentPathParams extends SpeakeasyBase {
    documentId: string;
}
export declare class DownloadDocumentRequest extends SpeakeasyBase {
    pathParams: DownloadDocumentPathParams;
}
export declare class DownloadDocumentResponse extends SpeakeasyBase {
    contentType: string;
    documentDownloadResponse?: shared.DocumentDownloadResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
