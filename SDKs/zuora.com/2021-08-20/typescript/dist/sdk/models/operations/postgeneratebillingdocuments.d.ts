import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGenerateBillingDocumentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostGenerateBillingDocumentsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostGenerateBillingDocumentsRequest extends SpeakeasyBase {
    pathParams: PostGenerateBillingDocumentsPathParams;
    headers: PostGenerateBillingDocumentsHeaders;
    request: shared.PostGenerateBillingDocumentType;
}
export declare class PostGenerateBillingDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    generateBillingDocumentResponseType?: shared.GenerateBillingDocumentResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
