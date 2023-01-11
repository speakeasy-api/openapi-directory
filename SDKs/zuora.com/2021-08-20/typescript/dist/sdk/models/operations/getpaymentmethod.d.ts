import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPaymentMethodPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class GetPaymentMethodHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentMethodRequest extends SpeakeasyBase {
    pathParams: GetPaymentMethodPathParams;
    headers: GetPaymentMethodHeaders;
}
export declare class GetPaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentMethodResponse?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
