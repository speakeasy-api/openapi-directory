import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSettlePaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PostSettlePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostSettlePaymentRequest extends SpeakeasyBase {
    pathParams: PostSettlePaymentPathParams;
    headers: PostSettlePaymentHeaders;
    request: shared.PostSettlePaymentRequest;
}
export declare class PostSettlePaymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postSettlePaymentResponse?: shared.PostSettlePaymentResponse;
    statusCode: number;
}
