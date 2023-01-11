import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutCancelPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PutCancelPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutCancelPaymentRequest extends SpeakeasyBase {
    pathParams: PutCancelPaymentPathParams;
    headers: PutCancelPaymentHeaders;
}
export declare class PutCancelPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
