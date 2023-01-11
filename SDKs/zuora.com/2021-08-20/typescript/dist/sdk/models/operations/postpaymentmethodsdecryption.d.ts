import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaymentMethodsDecryptionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostPaymentMethodsDecryptionRequest extends SpeakeasyBase {
    headers: PostPaymentMethodsDecryptionHeaders;
    request: shared.PostPaymentMethodDecryption;
}
export declare class PostPaymentMethodsDecryptionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postPaymentMethodResponseDecryption?: shared.PostPaymentMethodResponseDecryption;
    statusCode: number;
}
