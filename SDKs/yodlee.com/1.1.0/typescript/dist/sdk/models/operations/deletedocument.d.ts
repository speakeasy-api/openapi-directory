import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDocumentPathParams extends SpeakeasyBase {
    documentId: string;
}
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    pathParams: DeleteDocumentPathParams;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
