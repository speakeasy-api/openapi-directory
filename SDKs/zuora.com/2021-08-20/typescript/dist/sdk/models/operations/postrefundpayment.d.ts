import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRefundPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PostRefundPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRefundPaymentRequest extends SpeakeasyBase {
    pathParams: PostRefundPaymentPathParams;
    headers: PostRefundPaymentHeaders;
    request: Record<string, any>;
}
export declare class PostRefundPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getRefundPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
