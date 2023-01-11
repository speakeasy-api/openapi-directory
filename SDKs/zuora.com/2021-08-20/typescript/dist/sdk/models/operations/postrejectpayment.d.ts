import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRejectPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PostRejectPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRejectPaymentRequest extends SpeakeasyBase {
    pathParams: PostRejectPaymentPathParams;
    headers: PostRejectPaymentHeaders;
    request: shared.PostRejectPaymentRequest;
}
export declare class PostRejectPaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRejectPaymentResponse?: shared.PostRejectPaymentResponse;
    statusCode: number;
}
