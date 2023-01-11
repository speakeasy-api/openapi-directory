import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostHmacSignaturesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostHmacSignaturesRequest extends SpeakeasyBase {
    headers: PostHmacSignaturesHeaders;
    request: shared.PosthmacSignatureType;
}
export declare class PostHmacSignaturesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    posthmacSignatureResponseType?: shared.PosthmacSignatureResponseType;
    statusCode: number;
}
