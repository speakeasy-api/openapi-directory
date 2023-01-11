import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class GetPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentRequest extends SpeakeasyBase {
    pathParams: GetPaymentPathParams;
    headers: GetPaymentHeaders;
}
export declare class GetPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
