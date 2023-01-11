import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutUpdatePaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class PutUpdatePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUpdatePaymentRequest extends SpeakeasyBase {
    pathParams: PutUpdatePaymentPathParams;
    headers: PutUpdatePaymentHeaders;
    request: Record<string, any>;
}
export declare class PutUpdatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
