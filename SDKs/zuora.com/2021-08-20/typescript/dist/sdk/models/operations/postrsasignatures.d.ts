import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRsaSignaturesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRsaSignaturesRequest extends SpeakeasyBase {
    headers: PostRsaSignaturesHeaders;
    request: shared.PostrsaSignatureType;
}
export declare class PostRsaSignaturesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postrsaSignatureResponseType?: shared.PostrsaSignatureResponseType;
    statusCode: number;
}
