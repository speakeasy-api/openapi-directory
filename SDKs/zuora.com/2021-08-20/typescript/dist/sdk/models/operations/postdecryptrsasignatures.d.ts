import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDecryptRsaSignaturesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostDecryptRsaSignaturesRequest extends SpeakeasyBase {
    headers: PostDecryptRsaSignaturesHeaders;
    request: shared.PostDecryptionType;
}
export declare class PostDecryptRsaSignaturesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postDecryptResponseType?: shared.PostDecryptResponseType;
    statusCode: number;
}
