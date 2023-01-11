import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutVerifyPaymentMethodsPathParams extends SpeakeasyBase {
    paymentMethodId: string;
}
export declare class PutVerifyPaymentMethodsHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare class PutVerifyPaymentMethodsRequest extends SpeakeasyBase {
    pathParams: PutVerifyPaymentMethodsPathParams;
    headers: PutVerifyPaymentMethodsHeaders;
    request: shared.PutVerifyPaymentMethodType;
}
export declare class PutVerifyPaymentMethodsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    putVerifyPaymentMethodResponseType?: shared.PutVerifyPaymentMethodResponseType;
    statusCode: number;
}
