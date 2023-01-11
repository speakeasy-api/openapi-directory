import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuotesDocumentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostQuotesDocumentRequest extends SpeakeasyBase {
    headers: PostQuotesDocumentHeaders;
    request: shared.PostQuoteDocType;
}
export declare class PostQuotesDocumentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postQuoteDocResponseType?: shared.PostQuoteDocResponseType;
    statusCode: number;
}
