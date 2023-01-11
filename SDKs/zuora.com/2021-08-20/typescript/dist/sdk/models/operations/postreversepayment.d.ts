import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostReversePaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PostReversePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostReversePaymentRequest extends SpeakeasyBase {
    pathParams: PostReversePaymentPathParams;
    headers: PostReversePaymentHeaders;
    request: shared.PostReversePaymentRequest;
}
export declare class PostReversePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postReversePaymentResponse?: shared.PostReversePaymentResponse;
    statusCode: number;
}
